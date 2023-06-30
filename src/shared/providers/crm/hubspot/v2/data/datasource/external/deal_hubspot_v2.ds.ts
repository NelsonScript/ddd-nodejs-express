import Hubspot from "hubspot";
import { CRMRepository } from "../../../../../core/domain/repositories/crm.repository";


class DealHubspotV2Repository implements CRMRepository {
  private _hubspot: Hubspot;
  //private _contactMapper: ContactHubspotV2Mapper = new ContactHubspotV2Mapper();

  constructor(token:string) {
    this._hubspot = new Hubspot({ apiKey:token });
  }
  filterBy(property: string, value: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  find(item: any): Promise<any[]> {
    throw new Error("Method not implemented.");
  }
  findOne(id: any): Promise<any> {
    throw new Error("Method not implemented.");
  }

  associateWithObject(): Promise<any> {
    return new Promise<any>((resolve, reject) => { });
  };

  async getContactByEmail(_email: string): Promise<any> {
    // const contactRequestPromise = await this._hubspot.contacts.getByEmail(_email);
    // return this._contactMapper.toPersistence(contactRequestPromise.properties);
    return new Promise<any>((resolve, reject) => { });
  }

  async create(contact: any): Promise<any> {
    // return this._hubspot.contacts
    //   .createOrUpdate(contact.email, this._contactMapper.toDTO(contact));
    return new Promise<any>((resolve, reject) => { });
  }

  async read(): Promise<any> {
    return new Promise<any>((resolve, reject) => { });
  };

  async update(): Promise<any> {
    return new Promise<any>((resolve, reject) => { });
  };

  async delete(): Promise<any> {
    return new Promise<any>((resolve, reject) => { });
  };



}


export default DealHubspotV2Repository;