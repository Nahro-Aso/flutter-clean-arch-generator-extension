"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDto = generateDto;
const dtoTemplate_1 = require("../../templates/data/dtoTemplate");
const fileUtils_1 = require("../../utils/fileUtils");
async function generateDto(featurePath, featureName, capitalized) {
    const dtoClassName = `${capitalized}Dto`;
    const content = `class ${dtoClassName} {
      ${dtoTemplate_1.properties}
      ${(0, dtoTemplate_1.constructor)(dtoClassName)}
      ${(0, dtoTemplate_1.fromJson)(dtoClassName)}
      ${dtoTemplate_1.toJson}
      ${(0, dtoTemplate_1.toString)(dtoClassName)}
      ${(0, dtoTemplate_1.equalsOperator)(dtoClassName)}
      ${dtoTemplate_1.hashCode}
    }`;
    await (0, fileUtils_1.writeFile)(`${featurePath}/data/dto/${featureName}_dto.dart`, content);
}
//# sourceMappingURL=generateDto.js.map