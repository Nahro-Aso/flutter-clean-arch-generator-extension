#!/bin/bash

generate_repository() {
    local feature_name="$1"
    local capitalized_feature_name="$2"
    local package_name="$3"
    local provider_name="$4"

    create_file "lib/features/$feature_name/domain/repositories/${feature_name}_repository.dart" \
    "import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:${package_name}/features/${feature_name}/data/repositories/${feature_name}_repository_impl.dart';
import 'package:${package_name}/features/${feature_name}/data/sources/remote/${feature_name}_remote_data_source.dart';

abstract class ${capitalized_feature_name}Repository {
  // TODO: Add repository methods
}

final ${provider_name}RepositoryProvider = Provider<${capitalized_feature_name}Repository>(
  (ref) => ${capitalized_feature_name}RepositoryImpl(
    remoteDataSource: ref.watch(${provider_name}RemoteDataSourceProvider),
  ),
);"
} 