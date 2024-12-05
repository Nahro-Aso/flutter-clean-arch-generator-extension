export function capitalizeFeatureName(name: string): string {
    return name.split('_')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');
}

export function camelCase(name: string): string {
    if (name.includes('_')) {
        return name.split('_')
            .map((part, index) => index === 0 ? part.toLowerCase() : part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
            .join('');
    }
    const capitalized = capitalizeFeatureName(name);
    return capitalized.charAt(0).toLowerCase() + capitalized.slice(1);
} 