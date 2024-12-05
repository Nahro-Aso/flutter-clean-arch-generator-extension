import { writeFile } from '../../utils/fileUtils';

export async function generateNotifier(
    featurePath: string,
    featureName: string,
    capitalized: string,
    packageName: string,
    providerName: string
) {
    const content = `import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:${packageName}/features/${featureName}/domain/entities/entities.dart';
import 'package:${packageName}/features/${featureName}/domain/usecases/get_${featureName}_use_case.dart';

final ${providerName}NotifierProvider = AsyncNotifierProvider<${capitalized}Notifier, ${capitalized}Entity>(
  () => ${capitalized}Notifier(),
);

class ${capitalized}Notifier extends AsyncNotifier<${capitalized}Entity> {
  late final Get${capitalized}UseCase _useCase;

  @override
  Future<${capitalized}Entity> build() async {
    _useCase = ref.read(get${capitalized}UseCaseProvider);
    
    // TODO: Implement initial state
    throw UnimplementedError();
  }

  // TODO: Add notifier methods
}`;

    await writeFile(`${featurePath}/presentation/providers/${featureName}_notifier.dart`, content);
} 