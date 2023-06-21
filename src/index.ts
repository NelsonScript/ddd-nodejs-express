import {config} from "./config/env";
//import api from "./config/api.config";
import app from "./config/app";

app.listen(config.port, () => {

  console.log(`ℹ️ Servers from TS running at ${config.hostName} (🔅_🔅)`);
  // routes.forEach((route: CommonRoutesConfig) => {
  //   debugLog(`Routes configured for ${route.getName()}`);
  // });
});




