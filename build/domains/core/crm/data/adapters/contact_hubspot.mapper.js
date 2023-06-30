"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContactMapper {
    static toDTO = (contact) => {
        return {
            properties: [
                { property: "firstname", value: contact.firstname ? contact.firstname : "" },
                { property: "lastname", value: contact.lastname },
                { property: "email", value: contact.email },
                { property: "phone", value: contact.phone },
            ],
        };
    };
    static toJSON = (obj) => {
        return { firstname: obj['properties'].firstname,
            lastname: obj['properties'].lastname,
            email: obj['properties'].email,
            phone: obj['properties'].phone
        };
    };
}
exports.default = ContactMapper;
