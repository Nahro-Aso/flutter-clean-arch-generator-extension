"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateLocalDataSource = generateLocalDataSource;
const fileUtils_1 = require("../../utils/fileUtils");
async function generateLocalDataSource(featurePath, featureName, capitalized, providerName) {
    const abstractContent = `import 'package:flutter_riverpod/flutter_riverpod.dart';
import '${featureName}_local_data_source_impl.dart';

abstract class ${capitalized}LocalDataSource {
  // TODO: Add local data source methods
}

final ${providerName}LocalDataSourceProvider = Provider<${capitalized}LocalDataSource>(
  (ref) => ${capitalized}LocalDataSourceImpl(),
);`;
    const implContent = `import 'package:flutter_riverpod/flutter_riverpod.dart';
import '${featureName}_local_data_source.dart';

class ${capitalized}LocalDataSourceImpl implements ${capitalized}LocalDataSource {
  // TODO: Implement local data source methods
}`;
    await (0, fileUtils_1.writeFile)(`${featurePath}/data/sources/local/${featureName}_local_data_source.dart`, abstractContent);
    await (0, fileUtils_1.writeFile)(`${featurePath}/data/sources/local/${featureName}_local_data_source_impl.dart`, implContent);
}
//# sourceMappingURL=generateLocalDataSource.js.map