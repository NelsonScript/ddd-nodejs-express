"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contact_hubspot_datasource_1 = __importDefault(require("../../data/datasource/external/contact_hubspot.datasource"));
const env_1 = require("../../../../../config/env");
const contact_hubspot_v3_mapper_1 = require("../../../../../shared/providers/crm/hubspot/v3/data/mappers/contact_hubspot_v3.mapper");
class ContactService {
    _contactHubspotDatasource = new contact_hubspot_datasource_1.default(env_1.config.hubspotAccessToken);
    async create(contact) {
        return await this._contactHubspotDatasource.create(contact_hubspot_v3_mapper_1.ContactHubspotV3Mapper.toPersistence(contact));
    }
    async getContactByEmail(value) {
        return await this._contactHubspotDatasource.filterBy('email', value);
    }
    async getContacts() {
        return await this._contactHubspotDatasource.read();
    }
    async filterBy(property, value) {
        return await this._contactHubspotDatasource.filterBy(property, value);
    }
}
exports.default = ContactService;
