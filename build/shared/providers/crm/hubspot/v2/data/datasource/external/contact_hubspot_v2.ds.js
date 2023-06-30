"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hubspot_1 = __importDefault(require("hubspot"));
const hubspot_contact_v2_mapper_1 = require("../../mappers/hubspot_contact_v2.mapper");
class ContactHubspotV2Datasource {
    _hubspot;
    _contactMapper = new hubspot_contact_v2_mapper_1.ContactHubspotV2Mapper();
    constructor(token) {
        if (!token) {
            throw new Error("⛔️ Se necesita el token que se genera desde las API's de Hubspot. Por favor obtengalas con el administrador del CRM");
        }
        this._hubspot = new hubspot_1.default({ apiKey: token });
    }
    associateWithObject(idPrimary, idSecondary) {
        throw new Error("Method not implemented.");
    }
    find(item) {
        throw new Error("Method not implemented.");
    }
    findOne(id) {
        throw new Error("Method not implemented.");
    }
    async filterBy(prop, value) {
        const contactRequestPromise = await this._hubspot.contacts.getByEmail(value);
        return contactRequestPromise;
        //return this._contactMapper.toPersistence(contactRequestPromise.properties);
    }
    create(item) {
        throw new Error("Method not implemented.");
    }
    update(id, item) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
}
exports.default = ContactHubspotV2Datasource;
