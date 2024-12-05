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
exports.generateMapper = generateMapper;
const fileUtils_1 = require("../../utils/fileUtils");
function generateMapper(featurePath, featureName, capitalized, packageName) {
    return __awaiter(this, void 0, void 0, function* () {
        const content = `import 'package:${packageName}/features/${featureName}/domain/entities/${featureName}_entity.dart';
import 'package:${packageName}/features/${featureName}/data/dto/${featureName}_dto.dart';

class ${capitalized}Mapper {
  static ${capitalized}Entity fromJson(Map<String, dynamic> json) {
    final dto = ${capitalized}Dto.fromJson(json);
    return fromDto(dto);
  }

  static Map<String, dynamic> toJson(${capitalized}Entity entity) {
    final dto = toDto(entity);
    return dto.toJson();
  }

  static ${capitalized}Entity fromDto(${capitalized}Dto dto) {
    return ${capitalized}Entity(
      id: dto.id,
      // TODO: Add other mapping from DTO to entity
    );
  }

  static ${capitalized}Dto toDto(${capitalized}Entity entity) {
    return ${capitalized}Dto(
      id: entity.id,
      // TODO: Add other mapping from entity to DTO
    );
  }
}`;
        yield (0, fileUtils_1.writeFile)(`${featurePath}/data/mappers/${featureName}_mapper.dart`, content);
    });
}
