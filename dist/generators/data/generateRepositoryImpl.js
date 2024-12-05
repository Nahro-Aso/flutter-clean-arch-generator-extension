"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRepositoryImpl = generateRepositoryImpl;
const fileUtils_1 = require("../../utils/fileUtils");
async function generateRepositoryImpl(featurePath, featureName, capitalized, packageName) {
    const content = `import 'package:${packageName}/features/${featureName}/domain/repositories/${featureName}_repository.dart';
import 'package:${packageName}/features/${featureName}/data/sources/remote/${featureName}_remote_data_source.dart';

class ${capitalized}RepositoryImpl implements ${capitalized}Repository {
  final ${capitalized}RemoteDataSource remoteDataSource;

  const ${capitalized}RepositoryImpl({
    required this.remoteDataSource,
  });

  // TODO: Implement repository methods
}`;
    await (0, fileUtils_1.writeFile)(`${featurePath}/data/repositories/${featureName}_repository_impl.dart`, content);
}
//# sourceMappingURL=generateRepositoryImpl.js.map