/*
 * @Author: FutureMeng futuremeng@gmail.com
 * @Date: 2025-06-06 15:29:24
 * @LastEditors: FutureMeng futuremeng@gmail.com
 * @LastEditTime: 2025-06-06 15:29:32
 * @FilePath: /one-monorepo/apps/book-search/printPaths.ts
 * @Description: 
 * Copyright (c) 2025 by Jiulu.ltd, All Rights Reserved.
 */
import ts from 'typescript';
import path from 'path';

// 解析 tsconfig.json
function getTsConfigPaths() {
  const tsConfigPath = path.resolve(__dirname, 'tsconfig.json');
  const configFile = ts.readConfigFile(tsConfigPath, ts.sys.readFile);
  if (configFile.error) {
    console.error('Error reading tsconfig.json:', configFile.error);
    return;
  }

  const parsedConfig = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    path.dirname(tsConfigPath)
  );

  const paths = parsedConfig.options.paths || {};
  console.log('Effective paths for this sub-app:');
  console.log(JSON.stringify(paths, null, 2));
}

getTsConfigPaths();