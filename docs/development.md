# 开发与素材重现

修改游戏时以原 SWF、原脚本及字节码基准为依据。生成的 `src/generated/programs.js` 和原素材编号不宜手工改写；运行时行为修改必须保留有效对照。

## 本地检查

```sh
npm ci
npm test
npm run check:assets
npm run build
```

原版数值、战斗及碰撞对照见 [logic-audit.md](logic-audit.md)，设备与验证边界见 [verification.md](verification.md)。

## 重新提取

需要 Node.js 24、Java／javac 17 及以上、Python 3。Python 依赖为 fonttools、brotli、Pillow。

```sh
python3 -m venv .tools/python
. .tools/python/bin/activate
python3 -m pip install fonttools brotli pillow
sh tools/extract.sh
```

入口从 JPEXS 官方仓库下载固定版本并核对校验值；原 SWF／EXE 保持原始字节，原始脚本的行尾也保持不变。派生资源写入 `public/`、`src/generated/` 和 `reference/`。

## 原版参考播放器

```sh
mkdir -p .tools/ruffle
npm pack @ruffle-rs/ruffle@0.7.1 --pack-destination .tools
tar -xzf .tools/ruffle-rs-ruffle-0.7.1.tgz --strip-components=1 -C .tools/ruffle
python3 tools/serve-reference.py
```

参考播放器使用本地宋体 SWF 补齐原动态文本，正式游戏只加载原生代码和本站资源。字节码探针说明见 [tools/audit/README.md](../tools/audit/README.md)。

## 目录约定

| 目录／文件 | 内容 |
| --- | --- |
| `src/` | 原生运行时、渲染、声音、资源路径及回归测试 |
| `src/generated/` | 从原脚本及动画控制点生成的静态模块 |
| `public/` | 游戏时间轴、数据、原素材、字体及许可 |
| `reference/` | 可审查的原始脚本和文本导出 |
| `tools/` | 提取、素材校验、打包及字节码对照工具 |
| `docs/` | 原版分析、修复依据、验证记录 |
| `deploy/` | NGINX 和 HTTPS 反向代理配置 |
| `.github/workflows/pages.yml` | 测试、构建与 Pages 部署 |
| 原 SWF／EXE | 校验及重现所需的原始输入 |
| `.tools/`、`node_modules/`、`dist/`、`release/` | 本机缓存、依赖和构建产物，不提交到 Git |

生成 ZIP 使用 `python3 tools/package-release.py`，分别交付静态网站与源码，附 SHA-256 校验值。
