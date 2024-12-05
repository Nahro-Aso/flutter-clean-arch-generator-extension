import * as vscode from "vscode";
import { createDirectory } from "../utils/fileUtils";
import { capitalizeFeatureName, camelCase } from "../utils/stringUtils";
import { generateBarrelFiles } from "./barrelFiles";
import { generateDataLayer } from "./data/dataLayer";
import { generateDomainLayer } from "./domain/domainLayer";
import { generatePresentationLayer } from "./presentation/presentationLayer";

export async function generateFeatureFiles(
  workspaceFolder: vscode.WorkspaceFolder,
  featureName: string,
  packageName: string
) {
  const featurePath = `${workspaceFolder.uri.fsPath}/lib/features/${featureName}`;

  const capitalized = capitalizeFeatureName(featureName);
  const providerName = camelCase(featureName);

  await createDirectory(featurePath);
  await generateDataLayer(
    featurePath,
    featureName,
    capitalized,
    packageName,
    providerName
  );
  await generateDomainLayer(
    featurePath,
    featureName,
    capitalized,
    packageName,
    providerName
  );
  await generatePresentationLayer(
    featurePath,
    featureName,
    capitalized,
    packageName,
    providerName
  );
  await generateBarrelFiles(featurePath, featureName);
}
