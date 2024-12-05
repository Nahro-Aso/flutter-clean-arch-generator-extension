import {
  abstractContentTemplate,
  implContentTemplate,
} from "../../templates/data/remoteDataSourceTemplates";
import { writeFile } from "../../utils/fileUtils";

export async function generateRemoteDataSource(
  featurePath: string,
  featureName: string,
  capitalized: string,
  providerName: string
) {
  const abstractContent = abstractContentTemplate(
    featureName,
    capitalized,
    providerName
  );
  const implContent = implContentTemplate(featureName, capitalized);

  await writeFile(
    `${featurePath}/data/sources/remote/${featureName}_remote_data_source.dart`,
    abstractContent
  );
  await writeFile(
    `${featurePath}/data/sources/remote/${featureName}_remote_data_source_impl.dart`,
    implContent
  );
}
