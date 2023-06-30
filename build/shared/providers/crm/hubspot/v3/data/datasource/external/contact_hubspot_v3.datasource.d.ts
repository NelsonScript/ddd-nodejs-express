import { CollectionResponseWithTotalSimplePublicObjectForwardPaging, SimplePublicObject, SimplePublicObjectInput } from "@hubspot/api-client/lib/codegen/crm/contacts";
import { CRMRepository } from "../../../../../../../../shared/providers/crm/core/domain/repositories/crm.repository";
declare class ContactHubspotV3Datasource implements CRMRepository {
    private _hubspot;
    constructor(token: string);
    find(item: any): Promise<any[]>;
    findOne(id: any): Promise<any>;
    associateWithObject(): Promise<any>;
    filterBy(property: string, value: any): Promise<CollectionResponseWithTotalSimplePublicObjectForwardPaging>;
    create(contact: SimplePublicObject): Promise<SimplePublicObject>;
    createOrUpdated(propToFilter: string, valueToFilter: string, contact: SimplePublicObject): Promise<SimplePublicObject>;
    read(): Promise<any[]>;
    update(id: string, simplePublicObjectInput: SimplePublicObjectInput): Promise<SimplePublicObject>;
    delete(): Promise<any>;
}
export default ContactHubspotV3Datasource;
