"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PropertyHubspotV3Model {
    updatedAt;
    name;
    label;
    description;
    options;
    constructor(fields) {
        const { updatedAt, name, label, description, options } = fields;
        this.updatedAt = updatedAt;
        this.name = name;
        this.label = label;
        this.description = description;
        this.options = options;
    }
}
exports.default = PropertyHubspotV3Model;
