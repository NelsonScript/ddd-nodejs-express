import { CRMRepository } from "../../../../../../shared/providers/crm/core/domain/repositories/crm.repository";
declare class PropertyHubspotDatasource implements CRMRepository {
    private _propertyHubspotDatasource;
    constructor(token: string);
    find(item: any): Promise<any[]>;
    findOne(id: any): Promise<any>;
    associateWithObject(): Promise<any>;
    filterBy(hub: string, property: string): Promise<any>;
    create(contact: any): Promise<any>;
    read(): Promise<any>;
    update(): Promise<any>;
    delete(): Promise<any>;
}
export default PropertyHubspotDatasource;
