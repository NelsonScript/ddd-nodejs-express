import * as express from "express";

abstract class CommonRoutesConfig {
  api: express.Application;
  name: string;
  prefix: string;

  constructor(api: express.Application, name: string, prefix: string) {
    
    if (!api) throw new Error("Debe pasar el objeto api para configurar la ruta");
    if (!name) throw new Error("Debe pasar el nombre del route");
    if (!prefix) throw new Error("Debe pasar prefijo para configurar la ruta");

    this.api = api;
    this.name = name;
    this.prefix = prefix;
    this.configureRoutes();
  }
  getName() {
    return this.name;
  }
  abstract configureRoutes(): express.Application;
}

export { CommonRoutesConfig };