export const abstractContentTemplate = (
  featureName: string,
  capitalized: string,
  providerName: string
) => `
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '${featureName}_remote_data_source_impl.dart';

abstract class ${capitalized}RemoteDataSource {
  // TODO: Add remote data source methods
}

final ${providerName}RemoteDataSourceProvider = Provider<${capitalized}RemoteDataSource>(
  (ref) => ${capitalized}RemoteDataSourceImpl(),
);`;

export const implContentTemplate = (
  featureName: string,
  capitalized: string
) => `
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '${featureName}_remote_data_source.dart';

class ${capitalized}RemoteDataSourceImpl implements ${capitalized}RemoteDataSource {
  // TODO: Implement remote data source methods
}`;
