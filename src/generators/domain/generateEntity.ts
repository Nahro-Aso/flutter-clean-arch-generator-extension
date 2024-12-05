import { writeFile } from '../../utils/fileUtils';

export async function generateEntity(
    featurePath: string,
    featureName: string,
    capitalized: string
) {
    const content = `class ${capitalized}Entity {
  final String id;

  const ${capitalized}Entity({
    required this.id,
  });
  // TODO: Add entity properties and methods
}`;

    await writeFile(`${featurePath}/domain/entities/${featureName}_entity.dart`, content);
}

