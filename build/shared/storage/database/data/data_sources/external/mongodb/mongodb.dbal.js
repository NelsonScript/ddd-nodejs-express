"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDBAL = void 0;
const mongoose_1 = require("mongoose");
class MongoDBAL {
    static instance;
    static getInstance() {
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
    async connect(uri) {
        try {
            return await (0, mongoose_1.connect)(uri)
                .then((db) => console.log(`✅ Connecting to MONGO ${db.connection.name}`))
                .catch((error) => console.error(`🐞 Error connecting to Mongo Database: ${error}`));
        }
        catch (err) {
            throw new Error(`Error connecting to Mongo Database: ${err}`);
        }
    }
}
exports.MongoDBAL = MongoDBAL;
