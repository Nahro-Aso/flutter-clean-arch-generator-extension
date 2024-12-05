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
exports.generateLocalDataSource = generateLocalDataSource;
const fileUtils_1 = require("../../utils/fileUtils");
function generateLocalDataSource(featurePath, featureName, capitalized, providerName) {
    return __awaiter(this, void 0, void 0, function* () {
        const abstractContent = `import 'package:flutter_riverpod/flutter_riverpod.dart';
import '${featureName}_local_data_source_impl.dart';

abstract class ${capitalized}LocalDataSource {
  // TODO: Add local data source methods
}

final ${providerName}LocalDataSourceProvider = Provider<${capitalized}LocalDataSource>(
  (ref) => ${capitalized}LocalDataSourceImpl(),
);`;
        const implContent = `import 'package:flutter_riverpod/flutter_riverpod.dart';
import '${featureName}_local_data_source.dart';

class ${capitalized}LocalDataSourceImpl implements ${capitalized}LocalDataSource {
  // TODO: Implement local data source methods
}`;
        yield (0, fileUtils_1.writeFile)(`${featurePath}/data/sources/local/${featureName}_local_data_source.dart`, abstractContent);
        yield (0, fileUtils_1.writeFile)(`${featurePath}/data/sources/local/${featureName}_local_data_source_impl.dart`, implContent);
    });
}
