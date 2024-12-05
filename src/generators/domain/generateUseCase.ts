import { writeFile } from '../../utils/fileUtils';

export async function generateUseCase(
    featurePath: string,
    featureName: string,
    capitalized: string,
    packageName: string,
    providerName: string
) {
    const content = `import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:${packageName}/features/${featureName}/domain/repositories/${featureName}_repository.dart';

class Get${capitalized}UseCase {
  final ${capitalized}Repository repository;

  Get${capitalized}UseCase(this.repository);

  // TODO: Implement use case methods
}

final get${capitalized}UseCaseProvider = Provider<Get${capitalized}UseCase>(
  (ref) => Get${capitalized}UseCase(
    ref.watch(${providerName}RepositoryProvider),
  ),
);`;

    await writeFile(`${featurePath}/domain/usecases/get_${featureName}_use_case.dart`, content);
}