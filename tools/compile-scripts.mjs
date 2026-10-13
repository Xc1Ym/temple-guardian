// Source-to-source AS2 migration. Output consists of ordinary static JS functions,
// not bytecode, eval, an interpreter, or a SWF loader.
import { parse } from 'acorn';
import escodegen from 'escodegen';
import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve(import.meta.dirname, '..');
const sources = JSON.parse(fs.readFileSync(path.join(root, 'reference/sources.json'), 'utf8'));
const id = name => ({ type: 'Identifier', name });
const lit = value => typeof value === 'number' && value < 0 ? ({ type: 'UnaryExpression', operator: '-', argument: { type: 'Literal', value: -value }, prefix: true }) : ({ type: 'Literal', value });
const call = (name,args) => ({ type: 'CallExpression', callee: id(name), arguments: args, optional: false });
const scoped = (name,locals) => !locals.has(name);
const key = n => n.computed ? n.property : lit(n.property.name);
function bindings(node, set) {
  if (!node || typeof node !== 'object') return;
  if (node.type === 'FunctionExpression' || node.type === 'FunctionDeclaration') {
    if (node.type === 'FunctionDeclaration') set.add(node.id.name);
    return;
  }
  if (node.type === 'VariableDeclarator') set.add(node.id.name);
  for (const [k,v] of Object.entries(node)) {
    if (['start','end','loc'].includes(k)) continue;
    if (Array.isArray(v)) v.forEach(x=>bindings(x,set));
    else if (v && typeof v === 'object') bindings(v,set);
  }
}
function rewrite(n,locals,top=false) {
  if (!n || typeof n !== 'object') return n;
  if (n.type === 'Identifier') return scoped(n.name,locals) ? call('_get',[id('_scope'),lit(n.name)]) : n;
  if (n.type === 'Literal' || n.type === 'ThisExpression' || n.type === 'BreakStatement' || n.type === 'ContinueStatement') return n;
  if (n.type === 'FunctionExpression' || n.type === 'FunctionDeclaration') {
    const inner=new Set(locals); n.params.forEach(p=>inner.add(p.name)); inner.add('arguments');
    if (n.id) inner.add(n.id.name); bindings(n.body,inner);
    n.body=rewrite(n.body,inner,false); return n;
  }
  if (n.type === 'VariableDeclaration') {
    if (top) {
      const expressions=n.declarations.map(d=>call('_set',[id('_scope'),lit(d.id.name),d.init?rewrite(d.init,locals,top):id('undefined')]));
      return {type:'ExpressionStatement',expression:expressions.length===1?expressions[0]:{type:'SequenceExpression',expressions}};
    }
    n.declarations.forEach(d=>{if(d.init)d.init=rewrite(d.init,locals,false);});return n;
  }
  if (n.type === 'MemberExpression') return call('_get',[rewrite(n.object,locals,top),rewrite(key(n),locals,top)]);
  if (n.type === 'AssignmentExpression') {
    const l=n.left;
    if (l.type==='MemberExpression' || (l.type==='Identifier'&&scoped(l.name,locals))) {
      const obj=l.type==='MemberExpression'?rewrite(l.object,locals,top):id('_scope');
      const prop=l.type==='MemberExpression'?rewrite(key(l),locals,top):lit(l.name);
      let value=rewrite(n.right,locals,top);
      if(n.operator!=='=') value={type:'BinaryExpression',operator:n.operator.slice(0,-1),left:call('_get',[obj,prop]),right:value};
      return call('_set',[obj,prop,value]);
    }
    n.right=rewrite(n.right,locals,top);return n;
  }
  if (n.type === 'UpdateExpression') {
    const l=n.argument;
    if(l.type==='MemberExpression'||(l.type==='Identifier'&&scoped(l.name,locals))) return call('_update',[l.type==='MemberExpression'?rewrite(l.object,locals,top):id('_scope'),l.type==='MemberExpression'?rewrite(key(l),locals,top):lit(l.name),lit(n.operator==='++'?1:-1),lit(n.prefix)]);
    return n;
  }
  if(n.type==='UnaryExpression'&&n.operator==='delete') {
    const l=n.argument;
    if(l.type==='MemberExpression'||(l.type==='Identifier'&&scoped(l.name,locals))) return call('_delete',[l.type==='MemberExpression'?rewrite(l.object,locals,top):id('_scope'),l.type==='MemberExpression'?rewrite(key(l),locals,top):lit(l.name)]);
    if(l.type==='Identifier')return lit(false);
  }
  if(n.type==='CallExpression') {
    const c=n.callee, args={type:'ArrayExpression',elements:n.arguments.map(a=>rewrite(a,locals,top))};
    if(c.type==='MemberExpression')return call('_call',[rewrite(c.object,locals,top),rewrite(key(c),locals,top),args]);
    if(c.type==='Identifier'&&scoped(c.name,locals))return call('_call',[id('_scope'),lit(c.name),args]);
    n.callee=rewrite(c,locals,top);n.arguments=args.elements;return n;
  }
  if(n.type==='Property') {
    if(n.computed)n.key=rewrite(n.key,locals,top);
    n.value=rewrite(n.value,locals,top);n.shorthand=false;return n;
  }
  if(n.type==='ForInStatement' && top && n.left.type==='VariableDeclaration') {
    // A loop's binding is local to this source function; publish its final value
    // only when needed by following code via the enclosing scope.
    const name=n.left.declarations[0].id.name;locals.add(name);
    n.right=rewrite(n.right,locals,top);n.body=rewrite(n.body,locals,top);return n;
  }
  if(n.type==='ForStatement'&&top&&n.init?.type==='VariableDeclaration') {
    n.init=rewrite(n.init,locals,top).expression;
    n.test=rewrite(n.test,locals,top);n.update=rewrite(n.update,locals,top);n.body=rewrite(n.body,locals,top);return n;
  }
  for(const [k,v] of Object.entries(n)) {
    if(['start','end','loc','id','label'].includes(k))continue;
    if(Array.isArray(v)) n[k]=v.map(x=>x&&typeof x==='object'?rewrite(x,locals,top):x);
    else if(v&&typeof v==='object') n[k]=rewrite(v,locals,top);
  }
  return n;
}
const output=['// Generated from the original AS2 source. Regenerate with npm run extract:game.','export const programs = ['];
sources.forEach((source,i)=>{
  let code=source.code.replace(/^.*§.*(?:\r?\n|$)/gm,'');
  if (/^\s*on(?:ClipEvent)?\(/.test(code))code=code.slice(code.indexOf('{')+1,code.lastIndexOf('}'));
  try {
    const ast=parse(code,{ecmaVersion:2020,allowReturnOutsideFunction:true});
    rewrite(ast,new Set(['undefined','NaN','Infinity']),true);
    output.push(`// ${source.path}\nfunction program${i}(_scope, _get, _set, _call, _update, _delete) {\n${escodegen.generate(ast)}\n},`);
  } catch(error){throw new Error(`Cannot migrate ${source.path}: ${error.message}`);}
});
output.push('];\n');
fs.mkdirSync(path.join(root,'src/generated'),{recursive:true});
fs.writeFileSync(path.join(root,'src/generated/programs.js'),output.join('\n'));
const morphs=path.join(root,'public/assets/morphs/morphs.js');
if(fs.existsSync(morphs))fs.copyFileSync(morphs,path.join(root,'src/generated/morphs.js'));
console.log(`Migrated ${sources.length} original scripts to static native JS functions.`);
