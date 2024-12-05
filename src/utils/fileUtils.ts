import * as vscode from 'vscode';

export async function createDirectory(path: string): Promise<void> {
    const fs = vscode.workspace.fs;
    await fs.createDirectory(vscode.Uri.file(path));
}

export async function writeFile(path: string, content: string): Promise<void> {
    const fs = vscode.workspace.fs;
    await fs.writeFile(
        vscode.Uri.file(path),
        Buffer.from(content, 'utf8')
    );
}
