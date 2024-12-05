"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNotifier = generateNotifier;
const fileUtils_1 = require("../../utils/fileUtils");
const getProviderTemplate = (packageName, featureName, providerType, capitalized, featurePath) => {
    switch (providerType) {
        case "Provider":
            return `
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:${packageName}/features/${featureName}/domain/entities/${featureName}_entity.dart';

final ${featureName}Provider = Provider<${capitalized}Entity>((ref) {
  return ${capitalized}Entity();
});`;
        case "StateProvider":
            return `
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:${packageName}/features/${featureName}/domain/entities/${featureName}_entity.dart';
final ${featureName}StateProvider = StateProvider<${capitalized}Entity>((ref) {
  return ${capitalized}Entity();
});`;
        case "FutureProvider":
            return `
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:${packageName}/features/${featureName}/domain/entities/${featureName}_entity.dart';

final ${featureName}FutureProvider = FutureProvider<${capitalized}Entity>((ref) async {
  // TODO: Implement your async logic here
  await Future.delayed(const Duration(seconds: 1));
  return ${capitalized}Entity();
});`;
        case "StreamProvider":
            return `
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:${packageName}/features/${featureName}/domain/entities/${featureName}_entity.dart';
final ${featureName}StreamProvider = StreamProvider<${capitalized}Entity>((ref) {
  return Stream.periodic(
    const Duration(seconds: 1),
    (count) => ${capitalized}Entity(),
  );
});`;
        case "NotifierProvider":
            return `
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:${packageName}/features/${featureName}/domain/entities/${featureName}_entity.dart';
class ${capitalized}Notifier extends Notifier<${capitalized}Entity> {
  @override
  ${capitalized}Entity build() {
    return ${capitalized}Entity();
  }

 
}

final ${featureName}NotifierProvider = NotifierProvider<${capitalized}Notifier, ${capitalized}Entity>(() {
  return ${capitalized}Notifier();
});`;
        case "AsyncNotifierProvider":
            return `
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:${packageName}/features/${featureName}/domain/entities/${featureName}_entity.dart';

class ${capitalized}AsyncNotifier extends AsyncNotifier<${capitalized}Entity> {
  @override
  Future<${capitalized}Entity> build() async {
    // TODO: Implement your async build logic here
    await Future.delayed(const Duration(seconds: 1));
    return ${capitalized}Entity();
  }

 
}

final ${featureName}AsyncNotifierProvider = AsyncNotifierProvider<${capitalized}AsyncNotifier, ${capitalized}Entity>(() {
  return ${capitalized}AsyncNotifier();
});`;
        case "StateNotifierProvider":
            return `
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:${packageName}/features/${featureName}/domain/entities/${featureName}_entity.dart';
class ${capitalized}StateNotifier extends StateNotifier<${capitalized}Entity> {
  ${capitalized}StateNotifier() : super(${capitalized}Entity());

 
}

final ${featureName}StateNotifierProvider = StateNotifierProvider<${capitalized}StateNotifier, ${capitalized}Entity>((ref) {
  return ${capitalized}StateNotifier();
});`;
        case "ChangeNotifierProvider":
            return `
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter/foundation.dart';

class ${capitalized}ChangeNotifier extends ChangeNotifier {
  ${capitalized}Entity _state = ${capitalized}Entity();
  ${capitalized}Entity get state => _state;


}

final ${featureName}ChangeNotifierProvider = ChangeNotifierProvider<${capitalized}ChangeNotifier>((ref) {
  return ${capitalized}ChangeNotifier();
});`;
        default:
            throw new Error(`Unknown provider type: ${providerType}`);
    }
};
async function generateNotifier(featurePath, featureName, capitalized, packageName, providerName, providerType, modifiers) {
    const content = getProviderTemplate(packageName, featureName, providerType, capitalized, featurePath);
    await (0, fileUtils_1.writeFile)(`${featurePath}/presentation/providers/${featureName}_notifier.dart`, content);
}
//# sourceMappingURL=generateNotifier.js.map