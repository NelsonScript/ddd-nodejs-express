"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MongoDBDS {
    model;
    constructor(model) {
        this.model = model;
    }
    async find() {
        try {
            return await this.model.find();
        }
        catch (error) {
            throw new Error("🐞 Error al consultar la base de datos.");
        }
    }
    findOne(id) {
        throw new Error("Method not implemented.");
    }
    async create(item) {
        try {
            return await this.model.create(item);
        }
        catch (error) {
            throw new Error("🐞 Error al insertar un reistro en la base de datos.");
        }
    }
    update(id, item) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
}
exports.default = MongoDBDS;
