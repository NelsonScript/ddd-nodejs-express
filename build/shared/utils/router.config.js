"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterConfig = void 0;
class RouterConfig {
    app;
    constructor(app) {
        this.app = app;
    }
    // // Método para configurar una ruta GET
    // public get(route: string, callback: (req: Request, res: Response, next: NextFunction) => void) {
    //   this.router.get(route, callback);
    // }
    // // Método para configurar una ruta POST
    // public post(route: string, callback: (req: Request, res: Response, next: NextFunction) => void) {
    //   this.router.post(route, callback);
    // }
    // // Método para configurar una ruta PUT
    // public put(route: string, callback: (req: Request, res: Response, next: NextFunction) => void) {
    //   this.router.put(route, callback);
    // }
    // // Método para configurar una ruta DELETE
    // public delete(route: string, callback: (req: Request, res: Response, next: NextFunction) => void) {
    //   this.router.delete(route, callback);
    // }
    // Método para obtener el objeto router configurado
    getRouter() {
        return this.app;
    }
}
exports.RouterConfig = RouterConfig;
