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

      let providerName = "my_provider";
      providerName = providerName.toLowerCase();

      // Ask for feature name
      const featureName = await vscode.window.showInputBox({
        prompt: "Enter the feature name",
        placeHolder: "e.g., authentication, user_profile",
      });

      if (!featureName) {
        return;
      }

      // Add provider selection with all Riverpod provider types
      const providerType = await vscode.window.showQuickPick(
        [
          {
            label: "Provider",
            description: "Simple provider for computed properties or services",
          },
          {
            label: "StateProvider",
            description:
              "Simple state provider for filter conditions or simple state",
          },
          {
            label: "FutureProvider",
            description: "Provider for async operations returning a Future",
          },
          {
            label: "StreamProvider",
            description: "Provider for handling Stream of data",
          },
          {
            label: "NotifierProvider",
            description:
              "For complex immutable state with controlled mutations",
          },
          {
            label: "AsyncNotifierProvider",
            description:
              "For complex async immutable state with controlled mutations",
          },
          {
            label: "StateNotifierProvider",
            description:
              "Legacy: Complex immutable state (prefer NotifierProvider)",
          },
          {
            label: "ChangeNotifierProvider",
            description: "For complex mutable state (Flutter-style)",
          },
        ],
        {
          placeHolder: "Select the type of provider to generate",
        }
      );

      if (!providerType) {
        return;
      }

      // Ask for modifiers
      const modifiers = await vscode.window.showQuickPick(
        [
          { label: "None", description: "No modifiers" },
          { label: "Family", description: "Add family modifier" },
          { label: "AutoDispose", description: "Add autoDispose modifier" },
          { label: "Family & AutoDispose", description: "Add both modifiers" },
        ],
        {
          placeHolder: "Select modifiers for the provider",
        }
      );

      if (!modifiers) {
        return;
      }

      try {
        await generateFeatureFiles(
          workspaceFolder,
          featureName,
          packageName,
          providerType.label,
          modifiers.label
        );
        vscode.window.showInformationMessage(
          `Generated files for feature: ${featureName} with ${providerType.label} and ${modifiers.label}`
        );
      } catch (error) {
        vscode.window.showErrorMessage(`Error generating files: ${error}`);
      }
    }
  );

  context.subscriptions.push(generateFiles);
}
