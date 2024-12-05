import {
  properties,
  fromJson,
  toJson,
  equalsOperator,
  hashCode,
  constructor,
  toString,
} from "../../templates/data/dto.template";
import { writeFile } from "../../utils/fileUtils";

export async function generateDto(
  featurePath: string,
  featureName: string,
  capitalized: string
) {
  const dtoClassName = `${capitalized}Dto`;

  const content = `class ${dtoClassName} {
      ${properties}
      ${constructor(dtoClassName)}
      ${fromJson(dtoClassName)}
      ${toJson}
      ${toString(dtoClassName)}
      ${equalsOperator(dtoClassName)}
      ${hashCode}
    }`;

  await writeFile(`${featurePath}/data/dto/${featureName}_dto.dart`, content);
}
