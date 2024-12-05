"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDataLayer = generateDataLayer;
const fileUtils_1 = require("../../utils/fileUtils");
const generateRemoteDataSource_1 = require("./generateRemoteDataSource");
const generateLocalDataSource_1 = require("./generateLocalDataSource");
const generateDto_1 = require("./generateDto");
const generateMapper_1 = require("./generateMapper");
const generateRepositoryImpl_1 = require("./generateRepositoryImpl");
async function generateDataLayer(featurePath, featureName, capitalized, packageName, providerName) {
    await (0, fileUtils_1.createDirectory)(`${featurePath}/data/sources/remote`);
    await (0, fileUtils_1.createDirectory)(`${featurePath}/data/sources/local`);
    await (0, fileUtils_1.createDirectory)(`${featurePath}/data/dto`);
    await (0, fileUtils_1.createDirectory)(`${featurePath}/data/mappers`);
    await (0, fileUtils_1.createDirectory)(`${featurePath}/data/repositories`);
    await (0, generateRemoteDataSource_1.generateRemoteDataSource)(featurePath, featureName, capitalized, providerName);
    await (0, generateLocalDataSource_1.generateLocalDataSource)(featurePath, featureName, capitalized, providerName);
    await (0, generateDto_1.generateDto)(featurePath, featureName, capitalized);
    await (0, generateMapper_1.generateMapper)(featurePath, featureName, capitalized, packageName);
    await (0, generateRepositoryImpl_1.generateRepositoryImpl)(featurePath, featureName, capitalized, packageName);
}
//# sourceMappingURL=dataLayer.js.map