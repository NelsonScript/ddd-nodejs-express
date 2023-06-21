import { CRMRepository } from "../../../../../core/domain/repositories/crm.repository";
declare class ContactHubspotV2Datasource implements CRMRepository {
    private _hubspot;
    private _contactMapper;
    constructor(token: string);
    associateWithObject(idPrimary: number, idSecondary: number): Promise<any>;
    find(item: any): Promise<any[]>;
    findOne(id: any): Promise<any>;
    filterBy(prop: string, value: string): Promise<any>;
    create(item: any): Promise<boolean>;
    update(id: any, item: any): Promise<boolean>;
    delete(id: any): Promise<boolean>;
}
export default ContactHubspotV2Datasource;
