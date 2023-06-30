"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_client_1 = require("@hubspot/api-client");
//import { Filter, FilterGroup, PublicObjectSearchRequest } from "@hubspot/api-client/lib/codegen/crm/contacts";
class DealHubspotV3Datasource {
    _hubspot;
    //private _dealMapper: DealHubspotV3Mapper = new DealHubspotV3Mapper();
    constructor(token) {
        if (!token) {
            throw new Error("⛔️ Se necesita el token que se genera desde las API's de Hubspot. Por favor obtengalas con el administrador del CRM");
        }
        this._hubspot = new api_client_1.Client({ accessToken: token });
    }
    async associateWithObject(dealId, contactId) {
        return await this._hubspot.crm.deals.associationsApi.create(dealId, 'contacts', contactId, [
            {
                "associationCategory": "HUBSPOT_DEFINED",
                "associationTypeId": api_client_1.AssociationTypes.dealToContact
                // AssociationTypes contains the most popular HubSpot defined association types
            }
        ]);
    }
    ;
    filterBy(property, value) {
        throw new Error("Method not implemented.");
    }
    find(item) {
        throw new Error("Method not implemented.");
    }
    findOne(id) {
        throw new Error("Method not implemented.");
    }
    // async filterBy(prop: string, value: any): Promise<any> {
    //   const publicObjectSearchRequest = new PublicObjectSearchRequest;
    //   const filterObj = new Filter();
    //   filterObj.propertyName = prop;
    //   filterObj.value = value;
    //   filterObj.operator = "EQ";
    //   const filterGroupObj = new FilterGroup();
    //   filterGroupObj.filters = [filterObj];
    //   publicObjectSearchRequest.filterGroups = [filterGroupObj];
    //   const contactResponse = await this._hubspot.crm.contacts.searchApi.doSearch(publicObjectSearchRequest);
    //   return contactResponse;
    //   //return this._contactMapper.toPersistence(contactResponse);
    // }
    async create(simplePublicObjectInput) {
        return await this._hubspot.crm.deals.basicApi.create(simplePublicObjectInput);
    }
    async read() {
        return new Promise((resolve, reject) => { });
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
exports.default = DealHubspotV3Datasource;
