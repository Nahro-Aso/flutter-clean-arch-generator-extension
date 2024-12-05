"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateEntity = generateEntity;
const fileUtils_1 = require("../../utils/fileUtils");
const entityTemplate_1 = require("../../templates/domain/entityTemplate");
async function generateEntity(featurePath, featureName, capitalized) {
    const content = (0, entityTemplate_1.entityTemplate)(capitalized);
    await (0, fileUtils_1.writeFile)(`${featurePath}/domain/entities/${featureName}_entity.dart`, content);
}
//# sourceMappingURL=generateEntity.js.map