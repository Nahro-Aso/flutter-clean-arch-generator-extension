import { writeFile } from "../../utils/fileUtils";

 
export async function generateRemoteDataSource(
    featurePath: string,
    featureName: string,
    capitalized: string,
    providerName: string
) {
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

    await writeFile(`${featurePath}/data/sources/remote/${featureName}_remote_data_source.dart`, abstractContent);
    await writeFile(`${featurePath}/data/sources/remote/${featureName}_remote_data_source_impl.dart`, implContent);
}
