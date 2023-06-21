"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deal_hubspot_v3_datasource_1 = __importDefault(require("../../../../../../shared/providers/crm/hubspot/v3/data/datasource/external/deal_hubspot_v3.datasource"));
//import { logger } from "express-winston";
class DealHubspotDatasource {
    _dealHubspotV3Datasource;
    constructor(token) {
        this._dealHubspotV3Datasource = new deal_hubspot_v3_datasource_1.default(token);
    }
    find(item) {
        throw new Error("Method not implemented.");
    }
    findOne(id) {
        throw new Error("Method not implemented.");
    }
    async associateWithObject(dealId, contactId) {
        return await this._dealHubspotV3Datasource.associateWithObject(dealId, contactId);
    }
    ;
    async filterBy(property, value) {
        return await this._dealHubspotV3Datasource.filterBy(property, value);
        // return await ContactMapper.toJSON(contactRequest[0]);
    }
    async create(deal) {
        return await this._dealHubspotV3Datasource.create(deal);
    }
    async read() {
        return await this._dealHubspotV3Datasource.read();
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
exports.default = DealHubspotDatasource;
