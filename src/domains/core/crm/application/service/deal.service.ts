import DealHubspotV3Mapper from "../../../../../shared/providers/crm/hubspot/v3/data/mappers/deal_hubspot_v3.mapper";
import { config } from "../../../../../config/env";
import { LabelsBetweenObjectPair } from "@hubspot/api-client/lib/codegen/crm/deals";
import ContactService from "./contact.service";
import DealHubspotDatasource from "../../data/datasource/external/deal_hubspot.datasource";


class DealService {

  private _dealHubspotDatasource: DealHubspotDatasource = new DealHubspotDatasource(config.hubspotAccessToken);

  async create(deal: any) {
    return await this._dealHubspotDatasource.create( DealHubspotV3Mapper.toPersistence(deal));
  }

  async getBy(id: string): Promise<any> {
    return await this._dealHubspotDatasource.findOne(id);
  }

  async associateWithContact(deal: any, contact: any): Promise<LabelsBetweenObjectPair> {

    const contactService: ContactService = new ContactService();   
    const contactSaved = await contactService.create(contact);

    const dealSaved = await this.create(deal);
    return await this._dealHubspotDatasource.associateWithObject(parseInt(dealSaved.id), parseInt(contactSaved.id));
  }

}

export default DealService;