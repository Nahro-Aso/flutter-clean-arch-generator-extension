export const localDataSourceTemplate = {
  abstract: (featureName: string, capitalized: string, providerName: string) =>
    `import 'package:flutter_riverpod/flutter_riverpod.dart';
import '${featureName}_local_data_source_impl.dart';

abstract class ${capitalized}LocalDataSource {
  // TODO: Add local data source methods
}

final ${providerName}LocalDataSourceProvider = Provider<${capitalized}LocalDataSource>(
  (ref) => ${capitalized}LocalDataSourceImpl(),
);`,

  implementation: (featureName: string, capitalized: string) =>
    `import 'package:flutter_riverpod/flutter_riverpod.dart';
import '${featureName}_local_data_source.dart';

class ${capitalized}LocalDataSourceImpl implements ${capitalized}LocalDataSource {
  // TODO: Implement local data source methods
}`,
};
