"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const property_hubspot_v3_datasoruce_1 = __importDefault(require("../../../../../../shared/providers/crm/hubspot/v3/data/datasource/external/property_hubspot_v3.datasoruce"));
//import { logger } from "express-winston";
class PropertyHubspotDatasource {
    _propertyHubspotDatasource;
    constructor(token) {
        this._propertyHubspotDatasource = new property_hubspot_v3_datasoruce_1.default(token);
    }
    async find(item) {
        const propertyRequest = await this._propertyHubspotDatasource.find(item);
        return [propertyRequest];
    }
    findOne(id) {
        throw new Error("Method not implemented.");
    }
    associateWithObject() {
        return new Promise((resolve, reject) => { });
    }
    ;
    async filterBy(hub, property) {
        const propertyRequest = await this._propertyHubspotDatasource.filterBy(hub, property);
        return propertyRequest;
        // return await ContactMapper.toJSON(contactRequest[0]);
    }
    async create(contact) {
        // return this._hubspot.contacts
        //   .createOrUpdate(contact.email, this._contactMapper.toDTO(contact));
        return new Promise((resolve, reject) => { });
    }
    async read() {
        return new Promise((resolve, reject) => { });
        //return await this._propertyHubspotDatasource.read();
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
exports.default = PropertyHubspotDatasource;
