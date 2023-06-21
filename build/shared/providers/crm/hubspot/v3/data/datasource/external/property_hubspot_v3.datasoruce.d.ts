import { CRMRepository } from "../../../../../core/domain/repositories/crm.repository";
declare class PropertyHubspotV3Datasource implements CRMRepository {
    private _hubspot;
    constructor(token: string);
    associateWithObject(idPrimary: number, idSecondary: number): Promise<any>;
    filterBy(property: string, value: any): Promise<any>;
    find(item: any): Promise<any>;
    findOne(id: any): Promise<any>;
    create(item: any): Promise<boolean>;
    update(id: any, item: any): Promise<boolean>;
    delete(id: any): Promise<boolean>;
}
export default PropertyHubspotV3Datasource;
