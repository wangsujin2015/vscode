import * as changeCase from "change-case";
import { log } from "console";
import {
  WriteFileOptions,
  existsSync,
  lstatSync,
  writeFile,
  writeFileSync,
} from "fs";

const fsOptions: WriteFileOptions = { encoding: "utf-8" };





// router names
export function commonRouterNames(targetDirectory: string) {
  const targetPath = `${targetDirectory}/routers/names.dart`;
  const template = `
class RouteNames {
  static const main = '/';
}
`;

  writeFileSync(targetPath, template, fsOptions);
}

// router pages
export function commonRouterPages(targetDirectory: string) {
  const targetPath = `${targetDirectory}/routers/pages.dart`;
  const template = `
class RoutePages {
  // 列表
  // static List<GetPage> list = [];
}
`;

  writeFileSync(targetPath, template, fsOptions);
}

/////////////////////////////////////////////////////////////////////////////////////////

// values constants
export function commonValuesConstants(targetDirectory: string) {
  const targetPath = `${targetDirectory}/values/constants.dart`;
  const template = `/// 常量
class Constants {
  // 服务 api
  static const apiUrl = 'https://api.example.com';
}
`;

  writeFileSync(targetPath, template, fsOptions);
}

// values images
export function commonValuesImages(targetDirectory: string) {
  const targetPath = `${targetDirectory}/values/images.dart`;
  const template = `/// 图片 assets
class AssetsImages {
}
`;

  writeFileSync(targetPath, template, fsOptions);
}

// values svgs
export function commonValuesSvgs(targetDirectory: string) {
  const targetPath = `${targetDirectory}/values/svgs.dart`;
  const template = `/// svgs assets
class AssetsSvgs {
}
`;

  writeFileSync(targetPath, template, fsOptions);
}
