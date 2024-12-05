"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRemoteDataSource = generateRemoteDataSource;
const fileUtils_1 = require("../../utils/fileUtils");
async function generateRemoteDataSource(featurePath, featureName, capitalized, providerName) {
    const abstractContent = `import 'package:flutter_riverpod/flutter_riverpod.dart';
import '${featureName}_remote_data_source_impl.dart';

abstract class ${capitalized}RemoteDataSource {
  // TODO: Add remote data source methods
}

final ${providerName}RemoteDataSourceProvider = Provider<${capitalized}RemoteDataSource>(
  (ref) => ${capitalized}RemoteDataSourceImpl(),
);`;
    const implContent = `import 'package:flutter_riverpod/flutter_riverpod.dart';
import '${featureName}_remote_data_source.dart';

class ${capitalized}RemoteDataSourceImpl implements ${capitalized}RemoteDataSource {
  // TODO: Implement remote data source methods
}`;
    await (0, fileUtils_1.writeFile)(`${featurePath}/data/sources/remote/${featureName}_remote_data_source.dart`, abstractContent);
    await (0, fileUtils_1.writeFile)(`${featurePath}/data/sources/remote/${featureName}_remote_data_source_impl.dart`, implContent);
}
//# sourceMappingURL=generateRemoteDataSource.js.map