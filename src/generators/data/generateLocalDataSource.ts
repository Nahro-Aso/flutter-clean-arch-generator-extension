import { writeFile } from '../../utils/fileUtils';

export async function generateLocalDataSource(
    featurePath: string,
    featureName: string,
    capitalized: string,
    providerName: string
) {
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

    await writeFile(`${featurePath}/data/sources/local/${featureName}_local_data_source.dart`, abstractContent);
    await writeFile(`${featurePath}/data/sources/local/${featureName}_local_data_source_impl.dart`, implContent);
} 