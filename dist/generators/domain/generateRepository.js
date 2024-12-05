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
exports.generateRepository = generateRepository;
const fileUtils_1 = require("../../utils/fileUtils");
function generateRepository(featurePath, featureName, capitalized, packageName, providerName) {
    return __awaiter(this, void 0, void 0, function* () {
        const content = `import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:${packageName}/features/${featureName}/data/repositories/${featureName}_repository_impl.dart';
import 'package:${packageName}/features/${featureName}/data/sources/remote/${featureName}_remote_data_source.dart';

abstract class ${capitalized}Repository {
  // TODO: Add repository methods
}

final ${providerName}RepositoryProvider = Provider<${capitalized}Repository>(
  (ref) => ${capitalized}RepositoryImpl(
    remoteDataSource: ref.watch(${providerName}RemoteDataSourceProvider),
  ),
);`;
        yield (0, fileUtils_1.writeFile)(`${featurePath}/domain/repositories/${featureName}_repository.dart`, content);
    });
}
