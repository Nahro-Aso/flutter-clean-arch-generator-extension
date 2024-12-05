import { readFile } from "fs";
import path = require("path");


export class TemplateManager {
  private static readonly TEMPLATE_DIR = '../templates';

  static async loadTemplate(category: string, templateName: string): Promise<string> {
    const templatePath = path.join(
      __dirname,
      this.TEMPLATE_DIR,
      category,
      `${templateName}.template.txt`
    );
    return new Promise((resolve, reject) => {
      readFile(templatePath, 'utf-8', (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  }

  static replaceTemplateVars(content: string, variables: Record<string, string>): string {
    return Object.entries(variables).reduce(
      (acc, [key, value]) => acc.replace(new RegExp(`{{${key}}}`, 'g'), value),
      content
    );
  }
} 