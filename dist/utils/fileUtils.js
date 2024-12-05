"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDirectory = createDirectory;
exports.writeFile = writeFile;
const vscode = require("vscode");
async function createDirectory(path) {
    const fs = vscode.workspace.fs;
    await fs.createDirectory(vscode.Uri.file(path));
}
async function writeFile(path, content) {
    const fs = vscode.workspace.fs;
    await fs.writeFile(vscode.Uri.file(path), Buffer.from(content, 'utf8'));
}
//# sourceMappingURL=fileUtils.js.map