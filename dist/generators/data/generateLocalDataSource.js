"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateLocalDataSource = generateLocalDataSource;
const fileUtils_1 = require("../../utils/fileUtils");
const localDataSource_1 = require("../../templates/data/localDataSource");
async function generateLocalDataSource(featurePath, featureName, capitalized, providerName) {
    const abstractContent = localDataSource_1.localDataSourceTemplate.abstract(featureName, capitalized, providerName);
    const implContent = localDataSource_1.localDataSourceTemplate.implementation(featureName, capitalized);
    await (0, fileUtils_1.writeFile)(`${featurePath}/data/sources/local/${featureName}_local_data_source.dart`, abstractContent);
    await (0, fileUtils_1.writeFile)(`${featurePath}/data/sources/local/${featureName}_local_data_source_impl.dart`, implContent);
}
//# sourceMappingURL=generateLocalDataSource.js.map