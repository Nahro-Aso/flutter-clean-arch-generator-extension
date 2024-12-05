const getProviderTemplate = (
  packageName: string,
  featureName: string,
  providerType: string,
  capitalized: string,
  modifiers: string
) => {
  // Helper function to apply modifiers to provider type
  const applyModifiers = (baseType: string) => {
    switch (modifiers) {
      case "Family":
        return `${baseType}.family`;
      case "AutoDispose":
        return `${baseType}.autoDispose`;
      case "Family & AutoDispose":
        return `${baseType}.autoDispose.family`;
      default:
        return baseType;
    }
  };

  // Helper function to add parameter types for family modifier
  const getFamilyParams = () => {
    if (modifiers.includes("Family")) {
      return `<${capitalized}Entity>`;
    }
    return "";
  };

  // Helper function to add family parameter to provider function
  const getFamilyParameter = () => {
    if (modifiers.includes("Family")) {
      return `, ${capitalized}Entity param`;
    }
    return "";
  };

  switch (providerType) {
    case "Provider":
      return `
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:${packageName}/features/${featureName}/domain/entities/${featureName}_entity.dart';

final ${featureName}Provider = ${applyModifiers(
        "Provider"
      )}${getFamilyParams()}<${capitalized}Entity>((ref${getFamilyParameter()}) {
  return const ${capitalized}Entity();
});`;

    case "StateProvider":
      return `
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:${packageName}/features/${featureName}/domain/entities/${featureName}_entity.dart';

final ${featureName}StateProvider = ${applyModifiers(
        "StateProvider"
      )}${getFamilyParams()}<${capitalized}Entity>((ref${getFamilyParameter()}) {
  return const ${capitalized}Entity();
});`;

    case "FutureProvider":
      return `
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:${packageName}/features/${featureName}/domain/entities/${featureName}_entity.dart';

final ${featureName}FutureProvider = ${applyModifiers(
        "FutureProvider"
      )}${getFamilyParams()}<${capitalized}Entity>((ref${getFamilyParameter()}) async {
  // TODO: Implement your async logic here
  await Future.delayed(const Duration(seconds: 1));
  return const ${capitalized}Entity();
});`;

    case "StreamProvider":
      return `
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:${packageName}/features/${featureName}/domain/entities/${featureName}_entity.dart';

final ${featureName}StreamProvider = ${applyModifiers(
        "StreamProvider"
      )}${getFamilyParams()}<${capitalized}Entity>((ref${getFamilyParameter()}) {
  return Stream.periodic(
    const Duration(seconds: 1),
    (count) => ${capitalized}Entity(),
  );
});`;

    case "NotifierProvider":
      return `
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:${packageName}/features/${featureName}/domain/entities/${featureName}_entity.dart';

class ${capitalized}Notifier${getFamilyParams()} extends Notifier<${capitalized}Entity> {
  @override
  ${capitalized}Entity build(${
        modifiers.includes("Family") ? `${capitalized}Entity param` : ""
      }) {
    return const ${capitalized}Entity();
  }

  void updateState(${capitalized}Entity newState) {
    state = newState;
  }
}

final ${featureName}NotifierProvider = ${applyModifiers(
        "NotifierProvider"
      )}${getFamilyParams()}<${capitalized}Notifier${getFamilyParams()}, ${capitalized}Entity>(() {
  return ${capitalized}Notifier${getFamilyParams()}();
});`;

    case "AsyncNotifierProvider":
      return `
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:${packageName}/features/${featureName}/domain/entities/${featureName}_entity.dart';

class ${capitalized}AsyncNotifier${getFamilyParams()} extends AsyncNotifier<${capitalized}Entity> {
  @override
  Future<${capitalized}Entity> build(${
        modifiers.includes("Family") ? "T param" : ""
      }) async {
    // TODO: Implement your async build logic here
    await Future.delayed(const Duration(seconds: 1));
    return const ${capitalized}Entity();
  }

  Future<void> updateState(${capitalized}Entity newState) async {
    state = const AsyncValue.loading();
    state = await AsyncValue.guard(() async {
      await Future.delayed(const Duration(seconds: 1));
      return newState;
    });
  }
}

final ${featureName}AsyncNotifierProvider = ${applyModifiers(
        "AsyncNotifierProvider"
      )}${getFamilyParams()}<${capitalized}AsyncNotifier${getFamilyParams()}, ${capitalized}Entity>(() {
  return ${capitalized}AsyncNotifier${getFamilyParams()}();
});`;

    case "StateNotifierProvider":
      return `
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:${packageName}/features/${featureName}/domain/entities/${featureName}_entity.dart';

class ${capitalized}StateNotifier${getFamilyParams()} extends StateNotifier<${capitalized}Entity> {
  ${capitalized}StateNotifier(${
        modifiers.includes("Family") ? "this.param" : ""
      }) : super(const ${capitalized}Entity());
  ${modifiers.includes("Family") ? "\n  final T param;" : ""}

  void updateState(${capitalized}Entity newState) {
    state = newState;
  }
}

final ${featureName}StateNotifierProvider = ${applyModifiers(
        "StateNotifierProvider"
      )}${getFamilyParams()}<${capitalized}StateNotifier${getFamilyParams()}, ${capitalized}Entity>((ref${getFamilyParameter()}) {
  return ${capitalized}StateNotifier${getFamilyParams()}(${
        modifiers.includes("Family") ? "param" : ""
      });
});`;

    case "ChangeNotifierProvider":
      return `
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter/foundation.dart';
import 'package:${packageName}/features/${featureName}/domain/entities/${featureName}_entity.dart';

class ${capitalized}ChangeNotifier${getFamilyParams()} extends ChangeNotifier {
  ${capitalized}ChangeNotifier(${
        modifiers.includes("Family") ? "this.param" : ""
      });
  ${modifiers.includes("Family") ? "\n  final T param;" : ""}
  
  ${capitalized}Entity _state = const ${capitalized}Entity();
  ${capitalized}Entity get state => _state;

  void updateState(${capitalized}Entity newState) {
    _state = newState;
    notifyListeners();
  }
}

final ${featureName}ChangeNotifierProvider = ${applyModifiers(
        "ChangeNotifierProvider"
      )}${getFamilyParams()}<${capitalized}ChangeNotifier${getFamilyParams()}>((ref${getFamilyParameter()}) {
  return ${capitalized}ChangeNotifier${getFamilyParams()}(${
        modifiers.includes("Family") ? "param" : ""
      });
});`;

    default:
      throw new Error(`Unknown provider type: ${providerType}`);
  }
};
export const pageTemplate = (
  packageName: string,
  featureName: string,
  capitalized: string,
  providerName: string,
  providerType: string
) => `import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:${packageName}/features/${featureName}/presentation/providers/${featureName}_notifier.dart';

class ${capitalized}Page extends ConsumerWidget {
  const ${capitalized}Page({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {

    final state = ref.watch(${providerName}${providerType});

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
