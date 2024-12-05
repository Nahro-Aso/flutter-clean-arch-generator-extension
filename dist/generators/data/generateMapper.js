"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMapper = generateMapper;
const fileUtils_1 = require("../../utils/fileUtils");
async function generateMapper(featurePath, featureName, capitalized, packageName) {
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
    await (0, fileUtils_1.writeFile)(`${featurePath}/data/mappers/${featureName}_mapper.dart`, content);
}
//# sourceMappingURL=generateMapper.js.map