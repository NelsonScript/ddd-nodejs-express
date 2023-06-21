"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserEntity {
    _id;
    _name;
    _email;
    constructor(id, name, email) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get email() {
        return this._email;
    }
}
exports.default = UserEntity;
