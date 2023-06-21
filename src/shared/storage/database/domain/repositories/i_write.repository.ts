interface IWriteRepository<T> {
  create(item: T): Promise<any>;
  update(id: any, item: T): Promise<any>;
  delete(id: any): Promise<boolean>;
}

export default IWriteRepository;
