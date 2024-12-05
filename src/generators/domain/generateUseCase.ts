import { writeFile } from "../../utils/fileUtils";
import { useCaseTemplate } from "../../templates/domain/usecaseTemplate";

export async function generateUseCase(
  featurePath: string,
  featureName: string,
  capitalized: string,
  packageName: string,
  providerName: string
) {
  const content = useCaseTemplate(
    packageName,
    featureName,
    capitalized,
    providerName
  );

  await writeFile(
    `${featurePath}/domain/usecases/get_${featureName}_use_case.dart`,
    content
  );
}
