import { writeFile } from "../../utils/fileUtils";
import { pageTemplate } from "../../templates/presentation/presentationTemplate";

export async function generatePage(
  featurePath: string,
  featureName: string,
  capitalized: string,
  packageName: string,
  providerName: string
) {
  const content = pageTemplate(
    packageName,
    featureName,
    capitalized,
    providerName
  );

  await writeFile(
    `${featurePath}/presentation/pages/${featureName}_page.dart`,
    content
  );
}
