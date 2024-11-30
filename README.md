# Feature Generation Scripts

A collection of shell scripts for automatically generating clean architecture feature structures in Flutter projects.

## Overview

These scripts automate the creation of feature modules following clean architecture principles, with separate data, domain, and presentation layers. The system includes generators for all necessary components including DTOs, entities, repositories, use cases, and UI components.

## Directory Structure

```
scripts/
├── add_new_feature.sh          # Main script for feature generation
├── generators/
│   ├── data/                   # Data layer generators
│   │   ├── generate_dto.sh
│   │   ├── generate_mapper.sh
│   │   ├── generate_repository_impl.sh
│   │   └── generate_*_data_source.sh
│   ├── domain/                 # Domain layer generators
│   │   ├── generate_entity.sh
│   │   ├── generate_repository.sh
│   │   └── generate_use_case.sh
│   ├── presentation/           # Presentation layer generators
│   │   ├── generate_notifier.sh
│   │   ── generate_page.sh
│   └── generate_barrel_files.sh
└── utils/                      # Utility functions
    ├── file_utils.sh
    ├── string_utils.sh
    └── validators.sh
```

## Usage

### Basic Usage

To generate a new feature, run:

```bash
./scripts/add_new_feature.sh feature_name
```

Example:

```bash
./scripts/add_new_feature.sh user_profile
```

### Generated Structure

The script will create the following structure for your feature:

```
lib/features/feature_name/
├── data/
│   ├── dto/
│   ├── mappers/
│   ├── repositories/
│   └── sources/
│       ├── local/
│       └── remote/
├── domain/
│   ├── entities/
│   ├── repositories/
│   └── usecases/
└── presentation/
    ├── pages/
    ├── providers/
    └── widgets/
```

### Naming Conventions

- Feature names should be in snake_case (e.g., user_profile, authentication)
- The script will automatically generate appropriate cases:
  - PascalCase for classes (e.g., UserProfile)
  - camelCase for providers (e.g., userProfile)

## Components Generated

### Data Layer

- DTO classes with JSON serialization
- Mappers between DTOs and entities
- Repository implementations
- Remote and local data sources

### Domain Layer

- Entity classes
- Repository interfaces
- Use cases with Riverpod providers

### Presentation Layer

- Riverpod notifiers
- UI pages with basic error handling
- Barrel files for clean exports

## Utility Functions

### String Utilities

- `convert_to_pascal_case`: Converts snake_case to PascalCase
- `convert_to_lower_camel_case`: Converts snake_case to camelCase

### File Utilities

- `create_file`: Creates files with proper directory structure
- `create_base_directories`: Sets up the feature directory structure

### Validators

- `validate_feature_name`: Ensures feature names follow conventions

## Contributing

When adding new generators or modifying existing ones:

1. Place new generators in the appropriate layer directory
2. Update the main `add_new_feature.sh` script to include new generators
3. Follow the existing naming conventions
4. Add appropriate source imports in generator files

## Best Practices

1. Always validate feature names before generation
2. Use the provided utility functions for consistency
3. Maintain the clean architecture structure
4. Follow the established naming conventions

## Dependencies

- Bash shell
- Basic Unix commands (mkdir, echo, etc.)
- Flutter/Dart project structure
