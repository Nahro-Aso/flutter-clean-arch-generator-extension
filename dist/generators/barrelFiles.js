"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBarrelFiles = generateBarrelFiles;
const fileUtils_1 = require("../utils/fileUtils");
async function generateBarrelFiles(featurePath, featureName) {
    await (0, fileUtils_1.writeFile)(`${featurePath}/data/data.dart`, `export 'sources/remote/remote.dart';\nexport 'dto/dto.dart';\nexport 'mappers/mappers.dart';\nexport 'repositories/repositories.dart';`);
    await (0, fileUtils_1.writeFile)(`${featurePath}/data/sources/remote/remote.dart`, `export '${featureName}_remote_data_source.dart';\nexport '${featureName}_remote_data_source_impl.dart';`);
    await (0, fileUtils_1.writeFile)(`${featurePath}/data/sources/local/local.dart`, `export '${featureName}_local_data_source.dart';\nexport '${featureName}_local_data_source_impl.dart';`);
    await (0, fileUtils_1.writeFile)(`${featurePath}/data/dto/dto.dart`, `export '${featureName}_dto.dart';`);
    await (0, fileUtils_1.writeFile)(`${featurePath}/data/mappers/mappers.dart`, `export '${featureName}_mapper.dart';`);
    await (0, fileUtils_1.writeFile)(`${featurePath}/data/repositories/repositories.dart`, `export '${featureName}_repository_impl.dart';`);
    await (0, fileUtils_1.writeFile)(`${featurePath}/domain/domain.dart`, `export 'entities/entities.dart';\nexport 'repositories/repositories.dart';\nexport 'usecases/usecases.dart';`);
    await (0, fileUtils_1.writeFile)(`${featurePath}/domain/entities/entities.dart`, `export '${featureName}_entity.dart';`);
    await (0, fileUtils_1.writeFile)(`${featurePath}/domain/repositories/repositories.dart`, `export '${featureName}_repository.dart';`);
    await (0, fileUtils_1.writeFile)(`${featurePath}/domain/usecases/usecases.dart`, `export 'get_${featureName}_use_case.dart';`);
    await (0, fileUtils_1.writeFile)(`${featurePath}/presentation/presentation.dart`, `export 'pages/pages.dart';\nexport 'providers/providers.dart';\nexport 'widgets/widgets.dart';`);
    await (0, fileUtils_1.writeFile)(`${featurePath}/presentation/pages/pages.dart`, `export '${featureName}_page.dart';`);
    await (0, fileUtils_1.writeFile)(`${featurePath}/presentation/providers/providers.dart`, `export '${featureName}_notifier.dart';`);
    await (0, fileUtils_1.writeFile)(`${featurePath}/presentation/widgets/widgets.dart`, `// TODO: Export widget files here\n// Example:\n// export 'some_widget.dart';`);
    await (0, fileUtils_1.writeFile)(`${featurePath}/${featureName}.dart`, `export 'data/data.dart';\nexport 'domain/domain.dart';\nexport 'presentation/presentation.dart';`);
}
//# sourceMappingURL=barrelFiles.js.map