import { SimplePublicObject } from "@hubspot/api-client/lib/codegen/crm/contacts";
import { CRMRepository } from "../../../../../../shared/providers/crm/core/domain/repositories/crm.repository";
declare class ContactHubspotDatasource implements CRMRepository {
    private _contactHubspotV3Datasource;
    constructor(token: string);
    find(item: any): Promise<any[]>;
    findOne(id: any): Promise<any>;
    associateWithObject(): Promise<any>;
    filterBy(property: string, value: string): Promise<any>;
    create(contact: SimplePublicObject): Promise<any>;
    read(): Promise<any>;
    update(): Promise<any>;
    delete(): Promise<any>;
}
export default ContactHubspotDatasource;
