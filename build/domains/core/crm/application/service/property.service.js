"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const property_hubspot_datasource_1 = __importDefault(require("../../data/datasource/external/property_hubspot.datasource"));
const env_1 = require("../../../../../config/env");
class PropertyService {
    _propertyHubspotDatasource = new property_hubspot_datasource_1.default(env_1.config.hubspotAccessToken);
    async getProperties() {
        return await this._propertyHubspotDatasource.read();
    }
    async find(hub, property) {
        return await this._propertyHubspotDatasource.find({ hub: hub, property: property });
    }
}
exports.default = PropertyService;
