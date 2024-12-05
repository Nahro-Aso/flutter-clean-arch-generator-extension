import { writeFile } from "../../utils/fileUtils";

export async function generateRepositoryImpl(
  featurePath: string,
  featureName: string,
  capitalized: string,
  packageName: string
) {
  const content = `import 'package:${packageName}/features/${featureName}/domain/repositories/${featureName}_repository.dart';
import 'package:${packageName}/features/${featureName}/data/sources/remote/${featureName}_remote_data_source.dart';

class ${capitalized}RepositoryImpl implements ${capitalized}Repository {
  final ${capitalized}RemoteDataSource remoteDataSource;

  const ${capitalized}RepositoryImpl({
    required this.remoteDataSource,
  });

  // TODO: Implement repository methods
}`;

  await writeFile(
    `${featurePath}/data/repositories/${featureName}_repository_impl.dart`,
    content
  );
}
