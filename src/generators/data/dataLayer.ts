import { writeFile, createDirectory } from "../../utils/fileUtils";
import { generateRemoteDataSource } from "./generateRemoteDataSource";
import { generateLocalDataSource } from "./generateLocalDataSource";
import { generateDto } from "./generateDto";
import { generateMapper } from "./generateMapper";
import { generateRepositoryImpl } from "./generateRepositoryImpl";

export async function generateDataLayer(
  featurePath: string,
  featureName: string,
  capitalized: string,
  packageName: string,
  providerName: string
) {
  await createDirectory(`${featurePath}/data/sources/remote`);
  await createDirectory(`${featurePath}/data/sources/local`);
  await createDirectory(`${featurePath}/data/dto`);
  await createDirectory(`${featurePath}/data/mappers`);
  await createDirectory(`${featurePath}/data/repositories`);

  await generateRemoteDataSource(
    featurePath,
    featureName,
    capitalized,
    providerName
  );
  await generateLocalDataSource(
    featurePath,
    featureName,
    capitalized,
    providerName
  );
  await generateDto(featurePath, featureName, capitalized);
  await generateMapper(featurePath, featureName, capitalized, packageName);
  await generateRepositoryImpl(
    featurePath,
    featureName,
    capitalized,
    packageName
  );
}
