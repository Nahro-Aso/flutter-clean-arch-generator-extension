export const notifierTemplate = (
  packageName: string,
  featureName: string,
  providerName: string,
  capitalized: string
) => `import 'package:flutter_riverpod/flutter_riverpod.dart';
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

export const pageTemplate = (
  packageName: string,
  featureName: string,
  capitalized: string,
  providerName: string
) => `import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:${packageName}/features/${featureName}/presentation/providers/${featureName}_notifier.dart';

class ${capitalized}Page extends ConsumerWidget {
  const ${capitalized}Page({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final state = ref.watch(${providerName}NotifierProvider);

    return Scaffold(
      appBar: AppBar(
        title: const Text('${capitalized}'),
      ),
      body: state.when(
        data: (data) => Center(
          child: Text(data.toString()),
        ),
        error: (error, stackTrace) => Center(
          child: Text('Error: \$error'),
        ),
        loading: () => const Center(
          child: CircularProgressIndicator(),
        ),
      ),
    );
  }
}`;
