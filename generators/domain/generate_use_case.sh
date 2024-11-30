#!/bin/bash

generate_use_case() {
    local feature_name="$1"
    local capitalized_feature_name="$2"
    local package_name="$3"
    local provider_name="$4"
       

    create_file "lib/features/$feature_name/domain/usecases/get_${feature_name}_use_case.dart" \
    "import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:${package_name}/features/${feature_name}/domain/repositories/${feature_name}_repository.dart';

class Get${capitalized_feature_name}UseCase {
  final ${capitalized_feature_name}Repository repository;

  Get${capitalized_feature_name}UseCase(this.repository);

  // TODO: Implement use case methods
}

final get${capitalized_feature_name}UseCaseProvider = Provider<Get${capitalized_feature_name}UseCase>(
  (ref) => Get${capitalized_feature_name}UseCase(
    ref.watch(${provider_name}RepositoryProvider),
  ),
);"
} 