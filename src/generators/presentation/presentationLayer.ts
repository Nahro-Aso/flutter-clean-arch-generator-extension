import { writeFile, createDirectory } from "../../utils/fileUtils";
import { generateNotifier } from "./generateNotifier";
import { generatePage } from "./generatePage";

export async function generatePresentationLayer(
  featurePath: string,
  featureName: string,
  capitalized: string,
  packageName: string,
  providerName: string
) {
  await createDirectory(`${featurePath}/presentation/pages`);
  await createDirectory(`${featurePath}/presentation/providers`);
  await createDirectory(`${featurePath}/presentation/widgets`);

  await generatePage(
    featurePath,
    featureName,
    capitalized,
    packageName,
    providerName
  );
  await generateNotifier(
    featurePath,
    featureName,
    capitalized,
    packageName,
    providerName
  );
}
