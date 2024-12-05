"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNotifier = generateNotifier;
const fileUtils_1 = require("../../utils/fileUtils");
const presentationTemplate_1 = require("../../templates/presentation/presentationTemplate");
async function generateNotifier(featurePath, featureName, capitalized, packageName, providerName) {
    const content = (0, presentationTemplate_1.notifierTemplate)(packageName, featureName, providerName, capitalized);
    await (0, fileUtils_1.writeFile)(`${featurePath}/presentation/providers/${featureName}_notifier.dart`, content);
}
//# sourceMappingURL=generateNotifier.js.map