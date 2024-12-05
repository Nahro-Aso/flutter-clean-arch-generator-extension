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
exports.generatePresentationLayer = generatePresentationLayer;
const fileUtils_1 = require("../../utils/fileUtils");
const generateNotifier_1 = require("./generateNotifier");
const generatePage_1 = require("./generatePage");
function generatePresentationLayer(featurePath, featureName, capitalized, packageName, providerName) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, fileUtils_1.createDirectory)(`${featurePath}/presentation/pages`);
        yield (0, fileUtils_1.createDirectory)(`${featurePath}/presentation/providers`);
        yield (0, fileUtils_1.createDirectory)(`${featurePath}/presentation/widgets`);
        yield (0, generatePage_1.generatePage)(featurePath, featureName, capitalized, packageName, providerName);
        yield (0, generateNotifier_1.generateNotifier)(featurePath, featureName, capitalized, packageName, providerName);
    });
}
