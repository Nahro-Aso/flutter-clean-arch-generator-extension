"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUseCase = generateUseCase;
const fileUtils_1 = require("../../utils/fileUtils");
async function generateUseCase(featurePath, featureName, capitalized, packageName, providerName) {
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
    await (0, fileUtils_1.writeFile)(`${featurePath}/domain/usecases/get_${featureName}_use_case.dart`, content);
}
//# sourceMappingURL=generateUseCase.js.map