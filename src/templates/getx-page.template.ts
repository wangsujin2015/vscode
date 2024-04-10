import * as changeCase from "change-case";
import { existsSync, lstatSync, writeFile } from "fs";

export function stateTemplate(pageName: string, targetDirectory: string) {
  const pascalCaseName = changeCase.pascalCase(pageName.toLowerCase());
  const snakeCaseName = changeCase.snakeCase(pageName.toLowerCase()).toLowerCase();
  const targetPath = `${targetDirectory}/${pageName}/${snakeCaseName}_state.dart`;
  const template = `import 'package:get/get.dart';

class ${pascalCaseName}State {
  // title
  final _title = "".obs;
  set title(value) => _title.value = value;
  get title => _title.value;
}
`;

  return new Promise(async (resolve, reject) => {
    writeFile(targetPath, template, "utf8", (error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve;
    });
  });
}

export function controllerTemplate(pageName: string, targetDirectory: string) {
  const pascalCaseName = changeCase.pascalCase(pageName.toLowerCase());
  const snakeCaseName = changeCase.snakeCase(pageName.toLowerCase()).toLowerCase();
  const targetPath = `${targetDirectory}/${pageName}/${snakeCaseName}_controller.dart`;
  const template = `import 'package:get/get.dart';

import '${snakeCaseName}_state.dart';

class ${pascalCaseName}Controller extends GetxController {
  ${pascalCaseName}Controller();

  final state = ${pascalCaseName}State();

 

  /// 在 widget 内存中分配后立即调用。
  @override
  void onInit() {
    super.onInit();
  }

  /// 在 onInit() 之后调用 1 帧。这是进入的理想场所
  @override
  void onReady() {
    super.onReady();
  }

  /// 在 [onDelete] 方法之前调用。
  @override
  void onClose() {
    super.onClose();
  }

  /// dispose 释放内存
  @override
  void dispose() {
    super.dispose();
  }
}
`;

  return new Promise(async (resolve, reject) => {
    writeFile(targetPath, template, "utf8", (error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve;
    });
  });
}



export function viewTemplate(pageName: string, targetDirectory: string) {
  const pascalCaseName = changeCase.pascalCase(pageName.toLowerCase());
  const snakeCaseName = changeCase.snakeCase(pageName.toLowerCase()).toLowerCase();
  const targetPath = `${targetDirectory}/${pageName}/${snakeCaseName.toLowerCase()}_view.dart`;
  const template = `import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '${snakeCaseName}_controller.dart';

class ${pascalCaseName}Page extends GetView<${pascalCaseName}Controller> {
  const ${pascalCaseName}Page({Key? key}) : super(key: key);


  @override
  Widget build(BuildContext context) {
    return GetBuilder<${pascalCaseName}Controller>(
      init:${pascalCaseName}Controller(),
      builder: (_) {
        return Scaffold(
          appBar: AppBar(title: const Text("${snakeCaseName}")),
          body: SafeArea(
            child: Center(child: Text("${snakeCaseName}")),
          ),
        );
      },
    );
  }
}
`;

  return new Promise(async (resolve, reject) => {
    writeFile(targetPath, template, "utf8", (error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve;
    });
  });
}




