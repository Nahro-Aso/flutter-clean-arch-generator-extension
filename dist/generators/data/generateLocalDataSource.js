"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateLocalDataSource = generateLocalDataSource;
const fileUtils_1 = require("../../utils/fileUtils");
const local_data_source_template_1 = require("../../templates/data/local_data_source.template");
async function generateLocalDataSource(featurePath, featureName, capitalized, providerName) {
    const abstractContent = local_data_source_template_1.localDataSourceTemplate.abstract(featureName, capitalized, providerName);
    const implContent = local_data_source_template_1.localDataSourceTemplate.implementation(featureName, capitalized);
    await (0, fileUtils_1.writeFile)(`${featurePath}/data/sources/local/${featureName}_local_data_source.dart`, abstractContent);
    await (0, fileUtils_1.writeFile)(`${featurePath}/data/sources/local/${featureName}_local_data_source_impl.dart`, implContent);
}
//# sourceMappingURL=generateLocalDataSource.js.map