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
exports.generateDomainLayer = generateDomainLayer;
const fileUtils_1 = require("../utils/fileUtils");
const generateEntity_1 = require("./domain/generateEntity");
const generateRepository_1 = require("./domain/generateRepository");
const generateUseCase_1 = require("./domain/generateUseCase");
function generateDomainLayer(featurePath, featureName, capitalized, packageName, providerName) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, fileUtils_1.createDirectory)(`${featurePath}/domain/entities`);
        yield (0, fileUtils_1.createDirectory)(`${featurePath}/domain/repositories`);
        yield (0, fileUtils_1.createDirectory)(`${featurePath}/domain/usecases`);
        yield (0, generateEntity_1.generateEntity)(featurePath, featureName, capitalized);
        yield (0, generateRepository_1.generateRepository)(featurePath, featureName, capitalized, packageName, providerName);
        yield (0, generateUseCase_1.generateUseCase)(featurePath, featureName, capitalized, packageName, providerName);
    });
}
