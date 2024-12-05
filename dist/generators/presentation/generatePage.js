"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePage = generatePage;
const fileUtils_1 = require("../../utils/fileUtils");
const presentationTemplate_1 = require("../../templates/presentation/presentationTemplate");
async function generatePage(featurePath, featureName, capitalized, packageName, providerName) {
    const content = (0, presentationTemplate_1.pageTemplate)(packageName, featureName, capitalized, providerName);
    await (0, fileUtils_1.writeFile)(`${featurePath}/presentation/pages/${featureName}_page.dart`, content);
}
//# sourceMappingURL=generatePage.js.map