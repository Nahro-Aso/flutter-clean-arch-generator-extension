export const entityTemplate = (
  capitalized: string
) => `class ${capitalized}Entity {
  final String id;

  const ${capitalized}Entity({
    required this.id,
  });
  // TODO: Add entity properties and methods
}`;
