import ENV_CONFIG from "../../config/env.config.js";


let contactsDao;
console.log(`Using '${ENV_CONFIG.PERSISTENCE}' as persistence`);

switch(ENV_CONFIG.PERSISTENCE) {

  case "MEMORY": {
    const { ContactsMemoryDao } = await import("./memory/contacts.memory.dao.js");
    contactsDao = new ContactsMemoryDao();
    break;
  }

  case "MONGO": {
    const { ContactsMongoDao } = await import("./mongo/contacts.mongo.dao.js");
    contactsDao = new ContactsMongoDao();
    break;
  }
  
  default: {
    throw new Error("Please provide a valid persistence method");
  }
};

const getDAOS = () => {
  return {
    contactsDao,
  }
};

export default getDAOS;