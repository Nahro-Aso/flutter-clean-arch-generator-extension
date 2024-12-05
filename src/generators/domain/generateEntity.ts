import { writeFile } from "../../utils/fileUtils";
import { entityTemplate } from "../../templates/domain/entity.template";

export async function generateEntity(
  featurePath: string,
  featureName: string,
  capitalized: string
) {
  const content = entityTemplate(capitalized);

  await writeFile(
    `${featurePath}/domain/entities/${featureName}_entity.dart`,
    content
  );
}
