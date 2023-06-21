"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contact_hubspot_v3_datasource_1 = __importDefault(require("../../../../../../shared/providers/crm/hubspot/v3/data/datasource/external/contact_hubspot_v3.datasource"));
//import { logger } from "express-winston";
class ContactHubspotDatasource {
    _contactHubspotV3Datasource;
    constructor(token) {
        this._contactHubspotV3Datasource = new contact_hubspot_v3_datasource_1.default(token);
    }
    find(item) {
        throw new Error("Method not implemented.");
    }
    findOne(id) {
        throw new Error("Method not implemented.");
    }
    associateWithObject() {
        return new Promise((resolve, reject) => { });
    }
    ;
    async filterBy(property, value) {
        const contactRequest = await this._contactHubspotV3Datasource.filterBy(property, value);
        return contactRequest;
        // return await ContactMapper.toJSON(contactRequest[0]);
    }
    async create(contact) {
        return this._contactHubspotV3Datasource
            .createOrUpdated("n_mero_de_documento", contact.properties.n_mero_de_documento, contact);
    }
    async read() {
        return await this._contactHubspotV3Datasource.read();
    }
    ;
    async update() {
        return new Promise((resolve, reject) => { });
    }
    ;
    async delete() {
        return new Promise((resolve, reject) => { });
    }
    ;
}
exports.default = ContactHubspotDatasource;
