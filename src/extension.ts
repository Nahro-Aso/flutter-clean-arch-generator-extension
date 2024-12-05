import * as vscode from "vscode";
import { generateFeatureFiles } from "./generators/featureGenerator";
import * as fs from "fs";
import * as path from "path";

export function activate(context: vscode.ExtensionContext) {
  console.log("Your extension is now active!");

  // Register the generator command with a right-click context menu
  let generateFiles = vscode.commands.registerCommand(
    "riverpod-clean-arch.generate",
    async (uri: vscode.Uri) => {
      // Get the workspace folder from the clicked URI or fall back to the first workspace
      const workspaceFolder = uri
        ? vscode.workspace.getWorkspaceFolder(uri)
        : vscode.workspace.workspaceFolders?.[0];

      if (!workspaceFolder) {
        vscode.window.showErrorMessage("Please open a workspace first");
        return;
      }

      // Check for pubspec.yaml and get package name
      const pubspecPath = path.join(workspaceFolder.uri.fsPath, "pubspec.yaml");
      if (!fs.existsSync(pubspecPath)) {
        vscode.window.showErrorMessage(
          "No pubspec.yaml found. Please ensure you are in a Flutter/Dart project."
        );
        return;
      }

      let packageName = "my_app";
      try {
        const pubspecContent = fs.readFileSync(pubspecPath, "utf8");
        const nameMatch = pubspecContent.match(/name:\s*([\w_-]+)/);
        if (nameMatch) {
          packageName = nameMatch[1];
        }
      } catch (error) {
        console.error("Error reading pubspec.yaml:", error);
      }

      // Ask for feature name
      const featureName = await vscode.window.showInputBox({
        prompt: "Enter the feature name",
        placeHolder: "e.g., authentication, user_profile",
      });

      if (!featureName) {
        return;
      }

      try {
        await generateFeatureFiles(workspaceFolder, featureName, packageName);
        vscode.window.showInformationMessage(
          `Generated files for feature: ${featureName}`
        );
      } catch (error) {
        vscode.window.showErrorMessage(`Error generating files: ${error}`);
      }
    }
  );

  context.subscriptions.push(generateFiles);
}
