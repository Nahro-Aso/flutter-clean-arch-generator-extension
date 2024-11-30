#!/bin/bash

generate_abstract_remote_data_source() {
    local feature_name="$1"
    local capitalized_feature_name="$2"
     local provider_name="$3"
    

    create_file "lib/features/$feature_name/data/sources/remote/${feature_name}_remote_data_source.dart" \
    "import 'package:flutter_riverpod/flutter_riverpod.dart';
    import '${feature_name}_remote_data_source_impl.dart';
abstract class ${capitalized_feature_name}RemoteDataSource {
  // TODO: Add remote data source methods
}

final ${provider_name}RemoteDataSourceProvider = Provider<${capitalized_feature_name}RemoteDataSource>(
  (ref) => ${capitalized_feature_name}RemoteDataSourceImpl(),
);"
} 
