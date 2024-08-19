import * as changeCase from "change-case";
import { existsSync, lstatSync, writeFile } from "fs";

export function stateTemplate(pageName: string, targetDirectory: string) {
  const pascalCaseName = changeCase.pascalCase(pageName.toLowerCase());
  const snakeCaseName = changeCase.snakeCase(pageName.toLowerCase()).toLowerCase();
  const targetPath = `${targetDirectory}/${pageName}/${snakeCaseName}_state.dart`;
  const template = `import 'package:get/get.dart';

class ${pascalCaseName}State {

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
  const template = `import 'package:ai_read/common/values/page_arg.dart';
import 'package:ai_read/gen/assets.gen.dart';
import 'package:ai_read/ui/base/base_stateless_widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:get/get.dart';

import '${snakeCaseName}_controller.dart';

class ${pascalCaseName}Page extends BaseStateful<${pascalCaseName}Controller> {
  const ${pascalCaseName}Page({Key? key}) : super(key: key);

  @override
  createState() => _${pascalCaseName}State();
}

class _${pascalCaseName}State extends BaseStatefulState<${pascalCaseName}Controller> {
  final ${pascalCaseName}PageArg arg = Get.arguments;

  @override
  Widget? get title => Text(
        "--",
        style: TextStyle(
          fontSize: 17.sp,
          color: Colors.white,
          fontWeight: FontWeight.w500,
        ),
      );

  @override
  String? get backgroundImage => Assets.image.story.storyHomeBackground.path;
  @override
  ${pascalCaseName}Controller initController() {
    return ${pascalCaseName}Controller(arg);
  }

  @override
  Widget buildBody(BuildContext context,${pascalCaseName}Controller controller) {
    return Container();
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




