"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDto = generateDto;
const fileUtils_1 = require("../../utils/fileUtils");
async function generateDto(featurePath, featureName, capitalized) {
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
    await (0, fileUtils_1.writeFile)(`${featurePath}/data/dto/${featureName}_dto.dart`, content);
}
//# sourceMappingURL=generateDto.js.map