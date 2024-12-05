"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRepository = generateRepository;
const fileUtils_1 = require("../../utils/fileUtils");
async function generateRepository(featurePath, featureName, capitalized, packageName, providerName) {
    const content = `import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:${packageName}/features/${featureName}/data/repositories/${featureName}_repository_impl.dart';
import 'package:${packageName}/features/${featureName}/data/sources/remote/${featureName}_remote_data_source.dart';

abstract class ${capitalized}Repository {
  // TODO: Add repository methods
}

final ${providerName}RepositoryProvider = Provider<${capitalized}Repository>(
  (ref) => ${capitalized}RepositoryImpl(
    remoteDataSource: ref.watch(${providerName}RemoteDataSourceProvider),
  ),
);`;
    await (0, fileUtils_1.writeFile)(`${featurePath}/domain/repositories/${featureName}_repository.dart`, content);
}
//# sourceMappingURL=generateRepository.js.map