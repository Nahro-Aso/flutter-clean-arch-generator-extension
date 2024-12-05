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
exports.generateDto = generateDto;
const fileUtils_1 = require("../../utils/fileUtils");
function generateDto(featurePath, featureName, capitalized) {
    return __awaiter(this, void 0, void 0, function* () {
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
        yield (0, fileUtils_1.writeFile)(`${featurePath}/data/dto/${featureName}_dto.dart`, content);
    });
}
