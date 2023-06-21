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
const property_hubspot_v3_mapper_1 = require("../../mappers/property_hubspot_v3.mapper");
class PropertyHubspotV3Datasource {
    _hubspot;
    constructor(token) {
        if (!token) {
            throw new Error("⛔️ Se necesita el token que se genera desde las API's de Hubspot. Por favor obtengalas con el administrador del CRM");
        }
        this._hubspot = new hubspot.Client({ accessToken: token });
    }
    associateWithObject(idPrimary, idSecondary) {
        throw new Error("Method not implemented.");
    }
    filterBy(property, value) {
        throw new Error("Method not implemented.");
    }
    async find(item) {
        const archived = false;
        const properties = undefined;
        try {
            const values = await this._hubspot.crm.properties.coreApi.getByName(item.hub, item.property, archived, properties);
            return property_hubspot_v3_mapper_1.PropertyHubspotV3Mapper.toModel(values);
            //console.log(JSON.stringify(apiResponse, null, 2));
        }
        catch (e) {
            const errorMessage = e.message === 'HTTP request failed' ? JSON.stringify(e.response, null, 2) : e;
            throw new Error(e);
        }
    }
    findOne(id) {
        throw new Error("Method not implemented.");
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
exports.default = PropertyHubspotV3Datasource;
