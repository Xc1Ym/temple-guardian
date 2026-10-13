#!/bin/sh
set -eu
cd "$(dirname "$0")/.."
mkdir -p .tools/ffdec .tools/extracted
if [ ! -f .tools/ffdec/ffdec.jar ]; then
  curl -fL -o .tools/ffdec.zip https://github.com/jindrapetrik/jpexs-decompiler/releases/download/version26.3.0/ffdec_26.3.0.zip
  printf '%s  %s\n' '35f4930eb7c380afe66f2117f90b006deac0631473ad7500bb39c78f68645ecd' '.tools/ffdec.zip' | shasum -a 256 -c -
  unzip -q .tools/ffdec.zip -d .tools/ffdec
fi
export FFDEC_JAR="$PWD/.tools/ffdec/ffdec.jar"
java -Djava.awt.headless=true -Duser.home="$PWD/.tools/java-home" -jar "$FFDEC_JAR" -swf2xml temple-guardian.swf .tools/extracted/game.xml
java -Djava.awt.headless=true -Duser.home="$PWD/.tools/java-home" -jar "$FFDEC_JAR" -config autoDeobfuscate=true -export script,text .tools/extracted temple-guardian.swf
python3 tools/export-game.py
python3 tools/export-assets.py --ffdec "$FFDEC_JAR" --xml .tools/extracted/game.xml
python3 tools/export-hit-shapes.py --ffdec "$FFDEC_JAR"
python3 tools/export-icons.py --ffdec "$FFDEC_JAR"
python3 tools/build-font-reference.py --ffdec "$FFDEC_JAR" --scripts reference/scripts --texts reference/texts
node tools/compile-scripts.mjs
python3 tools/check-assets.py
