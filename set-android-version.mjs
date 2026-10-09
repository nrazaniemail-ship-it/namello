import { readFile, writeFile } from 'node:fs/promises';

const VERSION = '1.0.30';
const VERSION_CODE = 31;
const file = 'android/app/build.gradle';

let text = await readFile(file, 'utf8');
const codePattern = /versionCode\s+\d+/;
const namePattern = /versionName\s+"[^"]*"/;

if (!codePattern.test(text) || !namePattern.test(text)) {
  throw new Error(`Could not find versionCode/versionName in ${file}`);
}

text = text.replace(codePattern, `versionCode ${VERSION_CODE}`);
text = text.replace(namePattern, `versionName "${VERSION}"`);
await writeFile(file, text);

console.log(`Android version set to ${VERSION} (versionCode ${VERSION_CODE})`);
