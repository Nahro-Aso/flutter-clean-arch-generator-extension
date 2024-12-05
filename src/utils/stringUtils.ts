export function capitalizeFeatureName(name: string): string {
    return name.split('_')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');
}

export function camelCase(name: string): string {
    const capitalized = capitalizeFeatureName(name);
    return capitalized.charAt(0).toLowerCase() + capitalized.slice(1);
} 