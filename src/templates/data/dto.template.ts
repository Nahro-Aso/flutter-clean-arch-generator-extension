export const properties = `
  final String ? id;
  // TODO: Add more DTO properties
`;

export const constructor = (className: string) => `
  const ${className}({
      this.id,
  });
`;

export const fromJson = (className: string) => `
  factory ${className}.fromJson(Map<String, dynamic> json) {
    return ${className}(
    
      // TODO: Map other properties from json
    );
  }
`;

export const toJson = `
  Map<String, dynamic> toJson() {
    return {
    
    };
  }
`;

export const toString = (className: string) => `
  @override
  String toString() {
    return '${className}()';
  }
`;

export const equalsOperator = (className: string) => `
  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
  
    return other is ${className} && other.id == id;
  }
`;

export const hashCode = `
  @override
  int get hashCode => id.hashCode;
`;
