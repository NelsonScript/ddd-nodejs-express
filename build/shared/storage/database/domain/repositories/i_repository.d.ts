import IReadRepository from "./i_read.repository";
import IWriteRepository from "./i_write.repository";
interface IRepository<T> extends IReadRepository<T>, IWriteRepository<T> {
}
export default IRepository;
