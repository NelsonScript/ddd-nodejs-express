import Hubspot from "hubspot";
import { CRMRepository } from "../../../../../core/domain/repositories/crm.repository";
import { ContactHubspotV2Mapper } from "../../mappers/hubspot_contact_v2.mapper";


class ContactHubspotV2Datasource implements CRMRepository {

  private _hubspot: Hubspot;
  private _contactMapper: ContactHubspotV2Mapper = new ContactHubspotV2Mapper();

  constructor(token:string) {
    if (!token) {
      throw new Error("⛔️ Se necesita el token que se genera desde las API's de Hubspot. Por favor obtengalas con el administrador del CRM");
    }
    this._hubspot = new Hubspot({ apiKey: token });
  }
  
  associateWithObject(idPrimary: number, idSecondary: number): Promise<any> {
    throw new Error("Method not implemented.");
  }

  find(item: any): Promise<any[]> {
    throw new Error("Method not implemented.");
  }

  findOne(id: any): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async filterBy(prop:string, value: string): Promise<any> {
    
    const contactRequestPromise = await this._hubspot.contacts.getByEmail(value);
    return contactRequestPromise;
    //return this._contactMapper.toPersistence(contactRequestPromise.properties);
  }

  create(item: any): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  update(id: any, item: any): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  delete(id: any): Promise<boolean> {
    throw new Error("Method not implemented.");
  }


}


export default ContactHubspotV2Datasource;