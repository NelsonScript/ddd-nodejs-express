"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonRoutesConfig = void 0;
class CommonRoutesConfig {
    api;
    name;
    prefix;
    constructor(api, name, prefix) {
        if (!api)
            throw new Error("Debe pasar el objeto api para configurar la ruta");
        if (!name)
            throw new Error("Debe pasar el nombre del route");
        if (!prefix)
            throw new Error("Debe pasar prefijo para configurar la ruta");
        this.api = api;
        this.name = name;
        this.prefix = prefix;
        this.configureRoutes();
    }
    getName() {
        return this.name;
    }
}
exports.CommonRoutesConfig = CommonRoutesConfig;
