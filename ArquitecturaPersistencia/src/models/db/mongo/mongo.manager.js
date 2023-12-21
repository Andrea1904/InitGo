import mongoose from "mongoose";
import DB_CONFIG from "../../../config/db.config.js";

export class MongoManager {
  static #instance;

  constructor() {
    mongoose.connect(DB_CONFIG.mongo.uri)
      .then(() => {
        console.log("Connected to Mongo DB Successfully!");
      })
      .catch((error) => {
        console.log("There was an error trying to connect to Mongo DB");
        throw error;
      })
  }

  static start() {
    if (!this.#instance) {
      this.#instance = new MongoManager();
    }
    return this.#instance;
  }
}