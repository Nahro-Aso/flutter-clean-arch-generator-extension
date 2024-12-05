import { writeFile } from "../../utils/fileUtils";
import { notifierTemplate } from "../../templates/presentation/presentationTemplate";

export async function generateNotifier(
  featurePath: string,
  featureName: string,
  capitalized: string,
  packageName: string,
  providerName: string
) {
  const content = notifierTemplate(
    packageName,
    featureName,
    providerName,
    capitalized
  );

  await writeFile(
    `${featurePath}/presentation/providers/${featureName}_notifier.dart`,
    content
  );
}
