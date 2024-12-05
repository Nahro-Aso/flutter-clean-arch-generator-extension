"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDomainLayer = generateDomainLayer;
const fileUtils_1 = require("../utils/fileUtils");
const generateEntity_1 = require("./domain/generateEntity");
const generateRepository_1 = require("./domain/generateRepository");
const generateUseCase_1 = require("./domain/generateUseCase");
async function generateDomainLayer(featurePath, featureName, capitalized, packageName, providerName) {
    await (0, fileUtils_1.createDirectory)(`${featurePath}/domain/entities`);
    await (0, fileUtils_1.createDirectory)(`${featurePath}/domain/repositories`);
    await (0, fileUtils_1.createDirectory)(`${featurePath}/domain/usecases`);
    await (0, generateEntity_1.generateEntity)(featurePath, featureName, capitalized);
    await (0, generateRepository_1.generateRepository)(featurePath, featureName, capitalized, packageName, providerName);
    await (0, generateUseCase_1.generateUseCase)(featurePath, featureName, capitalized, packageName, providerName);
}
//# sourceMappingURL=domainLayer.js.map