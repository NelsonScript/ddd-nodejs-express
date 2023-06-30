import { IDBAL } from "../i_dbal";
declare class MongoDBAL implements IDBAL {
    private static instance;
    static getInstance(): MongoDBAL;
    /**
     * mongoose.connect('mongodb://db:27017/whatever');
     * Where 'db' is the name of your container within docker-compose.yml - i.e. depends_on: - db  db: image: mongodb
     * @param uri
     * @returns
     */
    connect(uri: any): Promise<any>;
}
export { MongoDBAL };
