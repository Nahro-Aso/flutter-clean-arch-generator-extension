#!/bin/bash

generate_abstract_local_data_source() {
    local feature_name="$1"
    local capitalized_feature_name="$2"
     local provider_name="$3"
    

    create_file "lib/features/$feature_name/data/sources/local/${feature_name}_local_data_source.dart" \
    "import 'package:flutter_riverpod/flutter_riverpod.dart';
    import '${feature_name}_local_data_source_impl.dart';


abstract class ${capitalized_feature_name}LocalDataSource {  
  // TODO: Add local data source methods  
}

final ${provider_name}LocalDataSourceProvider = Provider<${capitalized_feature_name}LocalDataSource>(
  (ref) => ${capitalized_feature_name}LocalDataSourceImpl(),
);"
} 
