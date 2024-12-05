import * as vscode from 'vscode';
import { generateFeatureFiles } from './generators/featureGenerator';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    console.log('Your extension is now active!');

    // Register the generator command
    let generateFiles = vscode.commands.registerCommand('riverpod-clean-arch.generate', async () => {
        // Get the current workspace folder
        const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
        if (!workspaceFolder) {
            vscode.window.showErrorMessage('Please open a workspace first');
            return;
        }

        // Check for pubspec.yaml
        const pubspecPath = path.join(workspaceFolder.uri.fsPath, 'pubspec.yaml');
        if (!fs.existsSync(pubspecPath)) {
            vscode.window.showErrorMessage('No pubspec.yaml found. Please ensure you are in a Flutter/Dart project.');
            return;
        }

        // Ask for feature name
        const featureName = await vscode.window.showInputBox({
            prompt: 'Enter the feature name',
            placeHolder: 'e.g., authentication, user_profile'
        });

        if (!featureName) {
            return;
        }

        try {
            // Generate your files here
            // Example:
            await generateFeatureFiles(workspaceFolder, featureName);
            vscode.window.showInformationMessage(`Generated files for feature: ${featureName}`);
        } catch (error) {
            vscode.window.showErrorMessage(`Error generating files: ${error}`);
        }
    });

    context.subscriptions.push(generateFiles);
}
