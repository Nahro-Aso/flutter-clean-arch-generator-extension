"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNotifier = generateNotifier;
const fileUtils_1 = require("../../utils/fileUtils");
async function generateNotifier(featurePath, featureName, capitalized, packageName, providerName) {
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
    await (0, fileUtils_1.writeFile)(`${featurePath}/presentation/providers/${featureName}_notifier.dart`, content);
}
//# sourceMappingURL=generateNotifier.js.map