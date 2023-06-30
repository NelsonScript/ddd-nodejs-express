"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyHubspotV3Mapper = void 0;
const property_hubspot_v3_model_1 = __importDefault(require("../../domain/models/property_hubspot_v3.model"));
class PropertyHubspotV3Mapper {
    static toModel = (property) => {
        return new property_hubspot_v3_model_1.default(property);
    };
}
exports.PropertyHubspotV3Mapper = PropertyHubspotV3Mapper;
