import * as vscode from 'vscode';
import { createDirectory } from '../utils/fileUtils';
import { capitalizeFeatureName, camelCase } from '../utils/stringUtils';
import { generateBarrelFiles } from './barrelFiles';
import { generateDataLayer } from './data/dataLayer';
import { generateDomainLayer } from './domain/domainLayer';
import { generatePresentationLayer } from './presentation/presentationLayer';
 

export async function generateFeatureFiles(workspaceFolder: vscode.WorkspaceFolder, featureName: string) {
    const featurePath = `${workspaceFolder.uri.fsPath}/lib/features/${featureName}`;
    const packageName = await getPackageName(workspaceFolder);
    
    const capitalized = capitalizeFeatureName(featureName);
    const providerName = camelCase(featureName);
    
    await createDirectory(featurePath);
    await generateDataLayer(featurePath, featureName, capitalized, packageName, providerName);
    await generateDomainLayer(featurePath, featureName, capitalized, packageName, providerName);
    await generatePresentationLayer(featurePath, featureName, capitalized, packageName, providerName);
    await generateBarrelFiles(featurePath, featureName);
}

async function getPackageName(workspaceFolder: vscode.WorkspaceFolder): Promise<string> {
    try {
        const pubspecPath = `${workspaceFolder.uri.fsPath}/pubspec.yaml`;
        const pubspecContent = await vscode.workspace.fs.readFile(vscode.Uri.file(pubspecPath));
        const content = pubspecContent.toString();
        const nameMatch = content.match(/name:\s*([\w_-]+)/);
        return nameMatch?.[1] ?? 'my_app';
    } catch (error) {
        return 'my_app';
    }
} 