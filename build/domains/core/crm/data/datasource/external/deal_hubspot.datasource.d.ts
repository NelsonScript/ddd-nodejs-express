import { LabelsBetweenObjectPair, SimplePublicObject } from "@hubspot/api-client/lib/codegen/crm/deals";
import { CRMRepository } from "../../../../../../shared/providers/crm/core/domain/repositories/crm.repository";
declare class DealHubspotDatasource implements CRMRepository {
    private _dealHubspotV3Datasource;
    constructor(token: string);
    find(item: any): Promise<any[]>;
    findOne(id: any): Promise<any>;
    associateWithObject(dealId: number, contactId: number): Promise<LabelsBetweenObjectPair>;
    filterBy(property: string, value: string): Promise<any>;
    create(deal: SimplePublicObject): Promise<SimplePublicObject>;
    read(): Promise<any>;
    update(): Promise<any>;
    delete(): Promise<any>;
}
export default DealHubspotDatasource;
