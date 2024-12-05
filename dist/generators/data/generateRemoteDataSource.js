"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRemoteDataSource = generateRemoteDataSource;
const remoteDataSourceTemplates_1 = require("../../templates/data/remoteDataSourceTemplates");
const fileUtils_1 = require("../../utils/fileUtils");
async function generateRemoteDataSource(featurePath, featureName, capitalized, providerName) {
    const abstractContent = (0, remoteDataSourceTemplates_1.abstractContentTemplate)(featureName, capitalized, providerName);
    const implContent = (0, remoteDataSourceTemplates_1.implContentTemplate)(featureName, capitalized);
    await (0, fileUtils_1.writeFile)(`${featurePath}/data/sources/remote/${featureName}_remote_data_source.dart`, abstractContent);
    await (0, fileUtils_1.writeFile)(`${featurePath}/data/sources/remote/${featureName}_remote_data_source_impl.dart`, implContent);
}
//# sourceMappingURL=generateRemoteDataSource.js.map