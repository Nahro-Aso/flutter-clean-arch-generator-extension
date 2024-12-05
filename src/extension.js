"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
const vscode = __importStar(require("vscode"));
function activate(context) {
    console.log('Your extension is now active!');
    // Register the generator command
    let generateFiles = vscode.commands.registerCommand('riverpod-clean-arch.generate', async () => {
        // Get the current workspace folder
        const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
        if (!workspaceFolder) {
            vscode.window.showErrorMessage('Please open a workspace first');
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
        }
        catch (error) {
            vscode.window.showErrorMessage(`Error generating files: ${error}`);
        }
    });
    context.subscriptions.push(generateFiles);
}
async function generateFeatureFiles(workspaceFolder, featureName) {
    // Add your file generation logic here
    // Example structure:
    const featurePath = `${workspaceFolder.uri.fsPath}/lib/features/${featureName}`;
    // You'll need to implement these functions
    await createDirectory(featurePath);
    await generateDataLayer(featurePath, featureName);
    await generateDomainLayer(featurePath, featureName);
    await generatePresentationLayer(featurePath, featureName);
}
//# sourceMappingURL=extension.js.map