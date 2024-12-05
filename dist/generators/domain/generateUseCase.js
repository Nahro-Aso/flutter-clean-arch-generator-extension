"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUseCase = generateUseCase;
const fileUtils_1 = require("../../utils/fileUtils");
const usecaseTemplate_1 = require("../../templates/domain/usecaseTemplate");
async function generateUseCase(featurePath, featureName, capitalized, packageName, providerName) {
    const content = (0, usecaseTemplate_1.useCaseTemplate)(packageName, featureName, capitalized, providerName);
    await (0, fileUtils_1.writeFile)(`${featurePath}/domain/usecases/get_${featureName}_use_case.dart`, content);
}
//# sourceMappingURL=generateUseCase.js.map