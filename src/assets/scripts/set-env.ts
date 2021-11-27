/* eslint-disable @typescript-eslint/no-var-requires */
/* tslint:disable */
// @ts-nocheck
const { writeFile, existsSync, mkdirSync } = require('fs');
const { argv } = require('yargs');


require('dotenv').config();
const environment = argv.environment;

function writeFileUsingFS(targetPath: string, environmentFileContent: string) {
  writeFile(targetPath, environmentFileContent, function (err: Error) {
    if (err) {
      console.log(err)
    }

    if (environmentFileContent !== '') {
      console.log(`Wrote variables to ${targetPath}`);
    }
  });
}

const envDirectory = 'src/environments';
const prodConfig = `${envDirectory}/environment.prod.ts`;
const devConfig = `${envDirectory}/environment.ts`;

if (!existsSync(envDirectory)) {
  mkdirSync(envDirectory);
}

writeFileUsingFS(prodConfig, '');
writeFileUsingFS(devConfig, '');

const isProduction = environment === 'prod';
const targetPath = isProduction ? prodConfig : devConfig;

const environmentContent = `export const environment = {
    production: ${isProduction},
    FIREBASE_API_CONFIG: {
      apiKey: '${process.env.FIREBASE_API_KEY}',
      authDomain: '${process.env.AUTHDOMAIN}',
      projectId: '${process.env.PROJECTID}',
      storageBucket: '${process.env.STORAGEBUCKET}',
      messagingSenderId: '${process.env.MESSAGINGSENDERID}',
      appId: '${process.env.APPID}'
    }
  }`

writeFileUsingFS(targetPath, environmentContent);
