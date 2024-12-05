import * as fs from 'fs/promises';
import * as path from 'path';
  import { generatePresentationLayer } from './presentation/presentationLayer';
import { capitalizeFeatureName, camelCase } from '../utils/stringUtils';
import { generateDomainLayer } from './domain/domainLayer';

export async function generateFiles(featureName: string, featureRoot: string, packageName: string) {
    const pascalCaseName = capitalizeFeatureName(featureName);
    const providerName = camelCase(featureName);
    

    // Generate Data Layer
    await generateDataLayer(featureName, pascalCaseName, featureRoot);
    
    // Generate Domain Layer
    await generateDomainLayer(featureName, pascalCaseName, featureRoot, packageName, providerName);
    
    // Generate Presentation Layer
    await generatePresentationLayer(featureName, pascalCaseName, featureRoot, packageName, providerName);
}

async function generateDataLayer(featureName: string, pascalCaseName: string, featureRoot: string) {
     
   
 

    
} 