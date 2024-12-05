"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFiles = generateFiles;
const presentationLayer_1 = require("./presentation/presentationLayer");
const stringUtils_1 = require("../utils/stringUtils");
const domainLayer_1 = require("./domain/domainLayer");
async function generateFiles(featureName, featureRoot, packageName, providerType, modifiers) {
    const pascalCaseName = (0, stringUtils_1.capitalizeFeatureName)(featureName);
    const providerName = (0, stringUtils_1.camelCase)(featureName);
    // Generate Data Layer
    await generateDataLayer(featureName, pascalCaseName, featureRoot);
    // Generate Domain Layer
    await (0, domainLayer_1.generateDomainLayer)(featureName, pascalCaseName, featureRoot, packageName, providerName);
    // Generate Presentation Layer
    await (0, presentationLayer_1.generatePresentationLayer)(featureRoot, featureName, pascalCaseName, packageName, providerName, providerType, modifiers);
}
async function generateDataLayer(featureName, pascalCaseName, featureRoot) { }
//# sourceMappingURL=fileGenerator.js.map