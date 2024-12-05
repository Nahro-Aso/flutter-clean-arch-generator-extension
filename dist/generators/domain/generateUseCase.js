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
exports.generateUseCase = generateUseCase;
const fileUtils_1 = require("../../utils/fileUtils");
function generateUseCase(featurePath, featureName, capitalized, packageName, providerName) {
    return __awaiter(this, void 0, void 0, function* () {
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
        yield (0, fileUtils_1.writeFile)(`${featurePath}/domain/usecases/get_${featureName}_use_case.dart`, content);
    });
}
