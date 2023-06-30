import { Model } from 'mongoose';
import ICRUDRepository from "../../../../domain/repositories/i_repository";
declare class MongoDBDS<T> implements ICRUDRepository<T> {
    private model;
    constructor(model: Model<T>);
    find(): Promise<T[]>;
    findOne(id: any): Promise<T>;
    create(item: T): Promise<any>;
    update(id: any, item: T): Promise<boolean>;
    delete(id: any): Promise<boolean>;
}
export default MongoDBDS;
