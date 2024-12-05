"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDto = generateDto;
const dto_template_1 = require("../../templates/data/dto.template");
const fileUtils_1 = require("../../utils/fileUtils");
async function generateDto(featurePath, featureName, capitalized) {
    const dtoClassName = `${capitalized}Dto`;
    const content = `class ${dtoClassName} {
      ${dto_template_1.properties}
      ${(0, dto_template_1.constructor)(dtoClassName)}
      ${(0, dto_template_1.fromJson)(dtoClassName)}
      ${dto_template_1.toJson}
      ${(0, dto_template_1.toString)(dtoClassName)}
      ${(0, dto_template_1.equalsOperator)(dtoClassName)}
      ${dto_template_1.hashCode}
    }`;
    await (0, fileUtils_1.writeFile)(`${featurePath}/data/dto/${featureName}_dto.dart`, content);
}
//# sourceMappingURL=generateDto.js.map