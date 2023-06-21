interface IReadRepository<T> {
  find(item: T): Promise<T[]>;
  findOne(id: any): Promise<T>;
}

export default IReadRepository;