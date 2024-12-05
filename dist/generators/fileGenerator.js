"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFiles = generateFiles;
const presentationLayer_1 = require("./presentation/presentationLayer");
const stringUtils_1 = require("../utils/stringUtils");
const domainLayer_1 = require("./domain/domainLayer");
function generateFiles(featureName, featureRoot, packageName) {
    return __awaiter(this, void 0, void 0, function* () {
        const pascalCaseName = (0, stringUtils_1.capitalizeFeatureName)(featureName);
        const providerName = (0, stringUtils_1.camelCase)(featureName);
        // Generate Data Layer
        yield generateDataLayer(featureName, pascalCaseName, featureRoot);
        // Generate Domain Layer
        yield (0, domainLayer_1.generateDomainLayer)(featureName, pascalCaseName, featureRoot, packageName, providerName);
        // Generate Presentation Layer
        yield (0, presentationLayer_1.generatePresentationLayer)(featureName, pascalCaseName, featureRoot, packageName, providerName);
    });
}
function generateDataLayer(featureName, pascalCaseName, featureRoot) {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
