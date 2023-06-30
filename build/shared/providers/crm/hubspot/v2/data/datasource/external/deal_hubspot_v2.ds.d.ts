import { CRMRepository } from "../../../../../core/domain/repositories/crm.repository";
declare class DealHubspotV2Repository implements CRMRepository {
    private _hubspot;
    constructor(token: string);
    filterBy(property: string, value: any): Promise<any>;
    find(item: any): Promise<any[]>;
    findOne(id: any): Promise<any>;
    associateWithObject(): Promise<any>;
    getContactByEmail(_email: string): Promise<any>;
    create(contact: any): Promise<any>;
    read(): Promise<any>;
    update(): Promise<any>;
    delete(): Promise<any>;
}
export default DealHubspotV2Repository;
