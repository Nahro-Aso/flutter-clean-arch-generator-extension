"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFeatureFiles = generateFeatureFiles;
const fileUtils_1 = require("../utils/fileUtils");
const stringUtils_1 = require("../utils/stringUtils");
const barrelFiles_1 = require("./barrelFiles");
const dataLayer_1 = require("./data/dataLayer");
const domainLayer_1 = require("./domain/domainLayer");
const presentationLayer_1 = require("./presentation/presentationLayer");
async function generateFeatureFiles(workspaceFolder, featureName, packageName) {
    const featurePath = `${workspaceFolder.uri.fsPath}/lib/features/${featureName}`;
    const capitalized = (0, stringUtils_1.capitalizeFeatureName)(featureName);
    const providerName = (0, stringUtils_1.camelCase)(featureName);
    await (0, fileUtils_1.createDirectory)(featurePath);
    await (0, dataLayer_1.generateDataLayer)(featurePath, featureName, capitalized, packageName, providerName);
    await (0, domainLayer_1.generateDomainLayer)(featurePath, featureName, capitalized, packageName, providerName);
    await (0, presentationLayer_1.generatePresentationLayer)(featurePath, featureName, capitalized, packageName, providerName);
    await (0, barrelFiles_1.generateBarrelFiles)(featurePath, featureName);
}
//# sourceMappingURL=featureGenerator.js.map