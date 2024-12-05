"use strict";
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
exports.generateBarrelFiles = generateBarrelFiles;
const fileUtils_1 = require("../utils/fileUtils");
function generateBarrelFiles(featurePath, featureName) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, fileUtils_1.writeFile)(`${featurePath}/data/data.dart`, `export 'sources/remote/remote.dart';\nexport 'dto/dto.dart';\nexport 'mappers/mappers.dart';\nexport 'repositories/repositories.dart';`);
        yield (0, fileUtils_1.writeFile)(`${featurePath}/data/sources/remote/remote.dart`, `export '${featureName}_remote_data_source.dart';\nexport '${featureName}_remote_data_source_impl.dart';`);
        yield (0, fileUtils_1.writeFile)(`${featurePath}/data/sources/local/local.dart`, `export '${featureName}_local_data_source.dart';\nexport '${featureName}_local_data_source_impl.dart';`);
        yield (0, fileUtils_1.writeFile)(`${featurePath}/data/dto/dto.dart`, `export '${featureName}_dto.dart';`);
        yield (0, fileUtils_1.writeFile)(`${featurePath}/data/mappers/mappers.dart`, `export '${featureName}_mapper.dart';`);
        yield (0, fileUtils_1.writeFile)(`${featurePath}/data/repositories/repositories.dart`, `export '${featureName}_repository_impl.dart';`);
        yield (0, fileUtils_1.writeFile)(`${featurePath}/domain/domain.dart`, `export 'entities/entities.dart';\nexport 'repositories/repositories.dart';\nexport 'usecases/usecases.dart';`);
        yield (0, fileUtils_1.writeFile)(`${featurePath}/domain/entities/entities.dart`, `export '${featureName}_entity.dart';`);
        yield (0, fileUtils_1.writeFile)(`${featurePath}/domain/repositories/repositories.dart`, `export '${featureName}_repository.dart';`);
        yield (0, fileUtils_1.writeFile)(`${featurePath}/domain/usecases/usecases.dart`, `export 'get_${featureName}_use_case.dart';`);
        yield (0, fileUtils_1.writeFile)(`${featurePath}/presentation/presentation.dart`, `export 'pages/pages.dart';\nexport 'providers/providers.dart';\nexport 'widgets/widgets.dart';`);
        yield (0, fileUtils_1.writeFile)(`${featurePath}/presentation/pages/pages.dart`, `export '${featureName}_page.dart';`);
        yield (0, fileUtils_1.writeFile)(`${featurePath}/presentation/providers/providers.dart`, `export '${featureName}_notifier.dart';`);
        yield (0, fileUtils_1.writeFile)(`${featurePath}/presentation/widgets/widgets.dart`, `// TODO: Export widget files here\n// Example:\n// export 'some_widget.dart';`);
        yield (0, fileUtils_1.writeFile)(`${featurePath}/${featureName}.dart`, `export 'data/data.dart';\nexport 'domain/domain.dart';\nexport 'presentation/presentation.dart';`);
    });
}
