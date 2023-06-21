import { connect } from "mongoose";
import { IDBAL } from "../i_dbal";

class MongoDBAL implements IDBAL {

  private static instance: MongoDBAL;

  public static getInstance(): MongoDBAL {
    if (!MongoDBAL.instance) {
      MongoDBAL.instance = new MongoDBAL();
    }

    return MongoDBAL.instance;
  }

  /**
   * mongoose.connect('mongodb://db:27017/whatever'); 
   * Where 'db' is the name of your container within docker-compose.yml - i.e. depends_on: - db  db: image: mongodb
   * @param uri 
   * @returns 
   */
  async connect(uri: any): Promise<any> {
    try {
      return await connect(uri)
        .then((db) => console.log(`✅ Connecting to MONGO ${db.connection.name}`))
        .catch((error) => console.error(`🐞 Error connecting to Mongo Database: ${error}`));
    } catch (err) {
      throw new Error(`Error connecting to Mongo Database: ${err}`);
    }

  }

}

export { MongoDBAL };
