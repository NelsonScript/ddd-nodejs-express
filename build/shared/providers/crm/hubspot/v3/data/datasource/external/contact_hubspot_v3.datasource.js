"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const hubspot = __importStar(require("@hubspot/api-client"));
const contacts_1 = require("@hubspot/api-client/lib/codegen/crm/contacts");
// import { ContactHubspotV3Mapper } from "../../../../v3/data/mappers/contact_hubspot_v3.mapper";
// import ContactHubspotV3Entity from "../../../../v3/domain/entities/contact_hubspot_v3.entity";
//import { ContactHubspotV3Model } from "../../infra/models/contact_hubspot_v3.model";
class ContactHubspotV3Datasource {
    _hubspot;
    constructor(token) {
        if (!token) {
            throw new Error("⛔️ Se necesita el token que se genera desde las API's de Hubspot. Por favor obtengalas con el administrador del CRM");
        }
        this._hubspot = new hubspot.Client({ accessToken: token });
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
        const publicObjectSearchRequest = new contacts_1.PublicObjectSearchRequest;
        const filterObj = new contacts_1.Filter();
        filterObj.propertyName = property;
        filterObj.value = value;
        filterObj.operator = "EQ";
        const filterGroupObj = new contacts_1.FilterGroup();
        filterGroupObj.filters = [filterObj];
        publicObjectSearchRequest.filterGroups = [filterGroupObj];
        return await this._hubspot.crm.contacts.searchApi.doSearch(publicObjectSearchRequest);
    }
    async create(contact) {
        return this._hubspot.crm.contacts.basicApi.create(contact);
    }
    async createOrUpdated(propToFilter, valueToFilter, contact) {
        const contactFiltered = await this.filterBy(propToFilter, valueToFilter);
        const contactFound = await contactFiltered.results[0];
        // console.info("®©℗🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔")
        // console.info(contactFound);
        const contactSaved = contactFiltered.total === 0 ? this.create(contact) : this.update(contactFound.id, contact);
        return contactSaved;
    }
    async read() {
        return await this._hubspot.crm.contacts.getAll();
    }
    ;
    async update(id, simplePublicObjectInput) {
        return this._hubspot.crm.contacts.basicApi.update(id, simplePublicObjectInput);
    }
    ;
    async delete() {
        return new Promise((resolve, reject) => { });
    }
    ;
}
exports.default = ContactHubspotV3Datasource;
