"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePresentationLayer = generatePresentationLayer;
const fileUtils_1 = require("../../utils/fileUtils");
const generateNotifier_1 = require("./generateNotifier");
const generatePage_1 = require("./generatePage");
async function generatePresentationLayer(featurePath, featureName, capitalized, packageName, providerName) {
    await (0, fileUtils_1.createDirectory)(`${featurePath}/presentation/pages`);
    await (0, fileUtils_1.createDirectory)(`${featurePath}/presentation/providers`);
    await (0, fileUtils_1.createDirectory)(`${featurePath}/presentation/widgets`);
    await (0, generatePage_1.generatePage)(featurePath, featureName, capitalized, packageName, providerName);
    await (0, generateNotifier_1.generateNotifier)(featurePath, featureName, capitalized, packageName, providerName);
}
//# sourceMappingURL=presentationLayer.js.map