"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateEntity = generateEntity;
const fileUtils_1 = require("../../utils/fileUtils");
async function generateEntity(featurePath, featureName, capitalized) {
    const content = `class ${capitalized}Entity {
  final String id;

  const ${capitalized}Entity({
    required this.id,
  });
  // TODO: Add entity properties and methods
}`;
    await (0, fileUtils_1.writeFile)(`${featurePath}/domain/entities/${featureName}_entity.dart`, content);
}
//# sourceMappingURL=generateEntity.js.map