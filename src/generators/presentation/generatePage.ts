import { writeFile } from '../../utils/fileUtils';

export async function generatePage(
    featurePath: string,
    featureName: string,
    capitalized: string,
    packageName: string,
    providerName: string
) {
    const content = `import 'package:flutter/material.dart';
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

    await writeFile(`${featurePath}/presentation/pages/${featureName}_page.dart`, content);
} 