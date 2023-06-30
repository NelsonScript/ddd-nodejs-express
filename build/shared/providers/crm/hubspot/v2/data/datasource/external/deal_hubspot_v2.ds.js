"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hubspot_1 = __importDefault(require("hubspot"));
class DealHubspotV2Repository {
    _hubspot;
    //private _contactMapper: ContactHubspotV2Mapper = new ContactHubspotV2Mapper();
    constructor(token) {
        this._hubspot = new hubspot_1.default({ apiKey: token });
    }
    filterBy(property, value) {
        throw new Error("Method not implemented.");
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
    async getContactByEmail(_email) {
        // const contactRequestPromise = await this._hubspot.contacts.getByEmail(_email);
        // return this._contactMapper.toPersistence(contactRequestPromise.properties);
        return new Promise((resolve, reject) => { });
    }
    async create(contact) {
        // return this._hubspot.contacts
        //   .createOrUpdate(contact.email, this._contactMapper.toDTO(contact));
        return new Promise((resolve, reject) => { });
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
exports.default = DealHubspotV2Repository;
