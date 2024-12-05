"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalizeFeatureName = capitalizeFeatureName;
exports.camelCase = camelCase;
function capitalizeFeatureName(name) {
    return name.split('_')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');
}
function camelCase(name) {
    if (name.includes('_')) {
        return name.split('_')
            .map((part, index) => index === 0 ? part.toLowerCase() : part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
            .join('');
    }
    const capitalized = capitalizeFeatureName(name);
    return capitalized.charAt(0).toLowerCase() + capitalized.slice(1);
}
//# sourceMappingURL=stringUtils.js.map