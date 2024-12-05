import { writeFile } from "../../utils/fileUtils";
import { mapperTemplate } from "../../templates/data/mapper.template";

export async function generateMapper(
  featurePath: string,
  featureName: string,
  capitalized: string,
  packageName: string
) {
  const content = mapperTemplate(packageName, featureName, capitalized);
  await writeFile(
    `${featurePath}/data/mappers/${featureName}_mapper.dart`,
    content
  );
}
