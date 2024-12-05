import { writeFile, createDirectory } from '../../utils/fileUtils';
import { generateEntity } from './generateEntity';
import { generateRepository } from './generateRepository';
import { generateUseCase } from './generateUseCase';

export async function generateDomainLayer(
    featurePath: string,
    featureName: string,
    capitalized: string,
    packageName: string,
    providerName: string
) {
    await createDirectory(`${featurePath}/domain/entities`);
    await createDirectory(`${featurePath}/domain/repositories`);
    await createDirectory(`${featurePath}/domain/usecases`);

    await generateEntity(featurePath, featureName, capitalized);
    await generateRepository(featurePath, featureName, capitalized, packageName, providerName);
    await generateUseCase(featurePath, featureName, capitalized, packageName, providerName);
}
