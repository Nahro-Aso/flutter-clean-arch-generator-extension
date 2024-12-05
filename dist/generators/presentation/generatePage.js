"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePage = generatePage;
const fileUtils_1 = require("../../utils/fileUtils");
async function generatePage(featurePath, featureName, capitalized, packageName, providerName) {
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
    await (0, fileUtils_1.writeFile)(`${featurePath}/presentation/pages/${featureName}_page.dart`, content);
}
//# sourceMappingURL=generatePage.js.map