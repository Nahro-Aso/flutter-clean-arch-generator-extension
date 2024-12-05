# Riverpod Clean Architecture Generator

A VS Code extension that generates boilerplate code following clean architecture principles with Riverpod state management for Flutter projects.

## Features

This extension automatically generates:

- Data layer (repositories, data sources, models)
- Domain layer (entities, use cases)
- Presentation layer (providers, screens, widgets)
- All necessary test files

## Installation

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
3. Search for "Riverpod Clean Architecture Generator"
4. Click Install

## Requirements

- VS Code 1.60.0 or higher
- Flutter project with Riverpod dependency
- Flutter SDK installed

## Usage

1. Right-click on any folder in your Flutter project
2. Select "Generate Clean Architecture Structure"
3. Enter the feature name when prompted
4. The extension will generate all necessary files and folders

## Example

Let's create a user authentication feature:

1. Right-click on the `lib/features` folder
2. Select "Generate Clean Architecture Structure"
3. Enter "auth" as the feature name

This will generate:
