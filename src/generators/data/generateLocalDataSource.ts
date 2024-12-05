import { writeFile } from "../../utils/fileUtils";
import { localDataSourceTemplate } from "../../templates/data/local_data_source.template";

export async function generateLocalDataSource(
  featurePath: string,
  featureName: string,
  capitalized: string,
  providerName: string
) {
  const abstractContent = localDataSourceTemplate.abstract(
    featureName,
    capitalized,
    providerName
  );
  const implContent = localDataSourceTemplate.implementation(
    featureName,
    capitalized
  );

  await writeFile(
    `${featurePath}/data/sources/local/${featureName}_local_data_source.dart`,
    abstractContent
  );
  await writeFile(
    `${featurePath}/data/sources/local/${featureName}_local_data_source_impl.dart`,
    implContent
  );
}
