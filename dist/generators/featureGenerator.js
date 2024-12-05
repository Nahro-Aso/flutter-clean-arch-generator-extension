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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFeatureFiles = generateFeatureFiles;
const vscode = __importStar(require("vscode"));
const fileUtils_1 = require("../utils/fileUtils");
const stringUtils_1 = require("../utils/stringUtils");
const barrelFiles_1 = require("./barrelFiles");
const dataLayer_1 = require("./data/dataLayer");
const domainLayer_1 = require("./domain/domainLayer");
const presentationLayer_1 = require("./presentation/presentationLayer");
function generateFeatureFiles(workspaceFolder, featureName) {
    return __awaiter(this, void 0, void 0, function* () {
        const featurePath = `${workspaceFolder.uri.fsPath}/lib/features/${featureName}`;
        const packageName = yield getPackageName(workspaceFolder);
        const capitalized = (0, stringUtils_1.capitalizeFeatureName)(featureName);
        const providerName = (0, stringUtils_1.camelCase)(featureName);
        yield (0, fileUtils_1.createDirectory)(featurePath);
        yield (0, dataLayer_1.generateDataLayer)(featurePath, featureName, capitalized, packageName, providerName);
        yield (0, domainLayer_1.generateDomainLayer)(featurePath, featureName, capitalized, packageName, providerName);
        yield (0, presentationLayer_1.generatePresentationLayer)(featurePath, featureName, capitalized, packageName, providerName);
        yield (0, barrelFiles_1.generateBarrelFiles)(featurePath, featureName);
    });
}
function getPackageName(workspaceFolder) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const pubspecPath = `${workspaceFolder.uri.fsPath}/pubspec.yaml`;
            const pubspecContent = yield vscode.workspace.fs.readFile(vscode.Uri.file(pubspecPath));
            const content = pubspecContent.toString();
            const nameMatch = content.match(/name:\s*([\w_-]+)/);
            return (_a = nameMatch === null || nameMatch === void 0 ? void 0 : nameMatch[1]) !== null && _a !== void 0 ? _a : 'my_app';
        }
        catch (error) {
            return 'my_app';
        }
    });
}
