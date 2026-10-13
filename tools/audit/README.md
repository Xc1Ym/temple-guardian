# 原始字节码探针

只用于开发核对，不进入正式构建。需要 Java 17、JPEXS 26.3.0、本地 Ruffle 0.7.1 和工程中已生成的宋体参考 SWF。

以下 `FFDEC_JAR` 指向已下载的官方工具；编译产物位于 `.tools/audit`：

```sh
export FFDEC_JAR="$PWD/.tools/ffdec/ffdec.jar"
mkdir -p .tools/audit
javac -cp "$FFDEC_JAR:${FFDEC_JAR%/*}/lib/*" -d .tools/audit tools/audit/CompileProbe.java
java -Djava.awt.headless=true -Duser.home="$PWD/.tools/java-home" \
  -cp ".tools/audit:$FFDEC_JAR:${FFDEC_JAR%/*}/lib/*" \
  CompileProbe temple-guardian.swf tools/audit/probe.as .tools/audit/probe.swf
python3 tools/audit/serve.py
```

打开 `http://127.0.0.1:5176/`，等待“原版探针已完成”，页面 `results` 中显示 JSON。分别将 `probe.as` 换成 `combat.as`、`collision.as` 编译，刷新页面，即可生成三份记录。核对记录后保存到对应的 `original-*.json`，运行 `npm test -- src/fidelity.test.ts`。

`CompileProbe` 仅向副本添加两个动作标签：进入游戏帧和运行所选探针。原文件不写入。三个探针使用固定随机值 0.5。实战探针还固定装饰布局，原因及验证边界见 `docs/logic-audit.md`。
