"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateEntity = generateEntity;
const fileUtils_1 = require("../../utils/fileUtils");
function generateEntity(featurePath, featureName, capitalized) {
    return __awaiter(this, void 0, void 0, function* () {
        const content = `class ${capitalized}Entity {
  final String id;

  const ${capitalized}Entity({
    required this.id,
  });
  // TODO: Add entity properties and methods
}`;
        yield (0, fileUtils_1.writeFile)(`${featurePath}/domain/entities/${featureName}_entity.dart`, content);
    });
}
