export default `import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:\${packageName}/features/\${featureName}/data/repositories/\${featureName}_repository_impl.dart';
import 'package:\${packageName}/features/\${featureName}/data/sources/remote/\${featureName}_remote_data_source.dart';

abstract class \${capitalized}Repository {
  // TODO: Add repository methods
}

final \${providerName}RepositoryProvider = Provider<\${capitalized}Repository>(
  (ref) => \${capitalized}RepositoryImpl(
    remoteDataSource: ref.watch(\${providerName}RemoteDataSourceProvider),
  ),
);`;
