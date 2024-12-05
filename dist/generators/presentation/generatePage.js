"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePage = generatePage;
const fileUtils_1 = require("../../utils/fileUtils");
function generatePage(featurePath, featureName, capitalized, packageName, providerName) {
    return __awaiter(this, void 0, void 0, function* () {
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
        yield (0, fileUtils_1.writeFile)(`${featurePath}/presentation/pages/${featureName}_page.dart`, content);
    });
}
