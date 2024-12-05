"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMapper = generateMapper;
const fileUtils_1 = require("../../utils/fileUtils");
const mapper_template_1 = require("../../templates/data/mapper.template");
async function generateMapper(featurePath, featureName, capitalized, packageName) {
    const content = (0, mapper_template_1.mapperTemplate)(packageName, featureName, capitalized);
    await (0, fileUtils_1.writeFile)(`${featurePath}/data/mappers/${featureName}_mapper.dart`, content);
}
//# sourceMappingURL=generateMapper.js.map