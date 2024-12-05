import { writeFile } from '../../utils/fileUtils';

export async function generateDto(
    featurePath: string,
    featureName: string,
    capitalized: string
) {
    const content = `class ${capitalized}Dto {
  final String id;
  // TODO: Add more DTO properties

  const ${capitalized}Dto({
    required this.id,
  });

  factory ${capitalized}Dto.fromJson(Map<String, dynamic> json) {
    return ${capitalized}Dto(
      id: json['id'] as String,
      // TODO: Map other properties from json
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      // TODO: Map other properties to json
    };
  }

  @override
  String toString() {
    return '${capitalized}Dto(id: \$id)';
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
  
    return other is ${capitalized}Dto && other.id == id;
  }

  @override
  int get hashCode => id.hashCode;
}`;

    await writeFile(`${featurePath}/data/dto/${featureName}_dto.dart`, content);
} 