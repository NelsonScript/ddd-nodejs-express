"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deal_hubspot_v3_mapper_1 = __importDefault(require("../../../../../shared/providers/crm/hubspot/v3/data/mappers/deal_hubspot_v3.mapper"));
const env_1 = require("../../../../../config/env");
const contact_service_1 = __importDefault(require("./contact.service"));
const deal_hubspot_datasource_1 = __importDefault(require("../../data/datasource/external/deal_hubspot.datasource"));
class DealService {
    _dealHubspotDatasource = new deal_hubspot_datasource_1.default(env_1.config.hubspotAccessToken);
    async create(deal) {
        return await this._dealHubspotDatasource.create(deal_hubspot_v3_mapper_1.default.toPersistence(deal));
    }
    async associateWithContact(deal, contact) {
        const contactService = new contact_service_1.default();
        const contactSaved = await contactService.create(contact);
        const dealSaved = await this.create(deal);
        return await this._dealHubspotDatasource.associateWithObject(parseInt(dealSaved.id), parseInt(contactSaved.id));
    }
}
exports.default = DealService;
