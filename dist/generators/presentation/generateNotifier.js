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
exports.generateNotifier = generateNotifier;
const fileUtils_1 = require("../../utils/fileUtils");
function generateNotifier(featurePath, featureName, capitalized, packageName, providerName) {
    return __awaiter(this, void 0, void 0, function* () {
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
        yield (0, fileUtils_1.writeFile)(`${featurePath}/presentation/providers/${featureName}_notifier.dart`, content);
    });
}
