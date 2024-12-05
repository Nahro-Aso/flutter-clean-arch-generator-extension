export const useCaseTemplate = (
  packageName: string,
  featureName: string,
  capitalized: string,
  providerName: string
) => `
import 'package:flutter_riverpod/flutter_riverpod.dart';
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
);
`;
