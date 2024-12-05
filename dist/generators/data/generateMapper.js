"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMapper = generateMapper;
const fileUtils_1 = require("../../utils/fileUtils");
const mapperTemplate_1 = require("../../templates/data/mapperTemplate");
async function generateMapper(featurePath, featureName, capitalized, packageName) {
    const content = (0, mapperTemplate_1.mapperTemplate)(packageName, featureName, capitalized);
    await (0, fileUtils_1.writeFile)(`${featurePath}/data/mappers/${featureName}_mapper.dart`, content);
}
//# sourceMappingURL=generateMapper.js.map