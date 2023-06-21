import {
  Model
} from 'mongoose';

import ICRUDRepository from "../../../../domain/repositories/i_repository";


class MongoDBDS<T> implements ICRUDRepository<T>{

  private model: Model<T>;
  constructor(model: Model<T>) {
    this.model = model;
  }

  async find(): Promise<T[]> {
    try {
      return await this.model.find();
    } catch (error) {
      throw new Error("🐞 Error al consultar la base de datos.");
    }
  }
  findOne(id: any): Promise<T> {
    throw new Error("Method not implemented.");
  }
  async create(item: T): Promise<any> {
    try {
      return await this.model.create(item);
    } catch (error) {
      throw new Error("🐞 Error al insertar un reistro en la base de datos.");
    }
  }
  update(id: any, item: T): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  delete(id: any): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

}

export default MongoDBDS;


