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
exports.generateDataLayer = generateDataLayer;
const fileUtils_1 = require("../../utils/fileUtils");
const generateRemoteDataSource_1 = require("./generateRemoteDataSource");
const generateLocalDataSource_1 = require("./generateLocalDataSource");
const generateDto_1 = require("./generateDto");
const generateMapper_1 = require("./generateMapper");
const generateRepositoryImpl_1 = require("./generateRepositoryImpl");
function generateDataLayer(featurePath, featureName, capitalized, packageName, providerName) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, fileUtils_1.createDirectory)(`${featurePath}/data/sources/remote`);
        yield (0, fileUtils_1.createDirectory)(`${featurePath}/data/sources/local`);
        yield (0, fileUtils_1.createDirectory)(`${featurePath}/data/dto`);
        yield (0, fileUtils_1.createDirectory)(`${featurePath}/data/mappers`);
        yield (0, fileUtils_1.createDirectory)(`${featurePath}/data/repositories`);
        yield (0, generateRemoteDataSource_1.generateRemoteDataSource)(featurePath, featureName, capitalized, providerName);
        yield (0, generateLocalDataSource_1.generateLocalDataSource)(featurePath, featureName, capitalized, providerName);
        yield (0, generateDto_1.generateDto)(featurePath, featureName, capitalized);
        yield (0, generateMapper_1.generateMapper)(featurePath, featureName, capitalized, packageName);
        yield (0, generateRepositoryImpl_1.generateRepositoryImpl)(featurePath, featureName, capitalized, packageName);
    });
}
