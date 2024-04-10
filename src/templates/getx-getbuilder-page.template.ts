import * as changeCase from "change-case";
import { existsSync, lstatSync, writeFile } from "fs";




// controller
export function controllerTemplate(pageName: string, targetDirectory: string) {
  const pascalCaseName = changeCase.pascalCase(pageName.toLowerCase());
  const snakeCaseName = changeCase.snakeCase(pageName.toLowerCase()).toLowerCase();
  const targetPath = `${targetDirectory}/${pageName}/${snakeCaseName}_controller.dart`;
  const template = `import 'package:get/get.dart';

class ${pascalCaseName}Controller extends GetxController {
  ${pascalCaseName}Controller();


  // @override
  // void onInit() {
  //   super.onInit();
  // }

  @override
  void onReady() {
    super.onReady();
   
  }

  // @override
  // void onClose() {
  //   super.onClose();
  // }
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

// view
export function viewTemplate(pageName: string, targetDirectory: string) {
  const pascalCaseName = changeCase.pascalCase(pageName.toLowerCase());
  const snakeCaseName = changeCase.snakeCase(pageName.toLowerCase()).toLowerCase();
  const targetPath = `${targetDirectory}/${pageName}/${snakeCaseName}_view.dart`;
  const template = `import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '${pascalCaseName}_controller.dart';

class ${pascalCaseName}Page extends GetView<${pascalCaseName}Controller> {
  const ${pascalCaseName}Page({Key? key}) : super(key: key);

  // 主视图
  Widget _buildView() {
    return const Center(
      child: Text("${pascalCaseName}Page"),
    );
  }

  @override
  Widget build(BuildContext context) {
    return GetBuilder<${pascalCaseName}Controller>(
      init: ${pascalCaseName}Controller(),
      builder: (_) {
        return Scaffold(
          appBar: AppBar(title: const Text("${snakeCaseName}")),
          body: SafeArea(
            child: _buildView(),
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
