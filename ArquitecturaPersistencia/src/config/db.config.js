import ENV_CONFIG from "./env.config.js";

const { DATABASE, DB_HOST, DB_PASSWORD } = ENV_CONFIG;

const DB_CONFIG = {
  mongo: {
    uri: DB_HOST.replace('<password>', DB_PASSWORD).replace('<database>', DATABASE),
  }
};

export default DB_CONFIG;