import conf from "../conf/conf";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  // Add joke to database
  async addJoke({ content, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
        {
          content,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite Service :: createPost :: error", error);
    }
  }

  // Get jokes from database
  async getJokes() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        []
      );
    } catch (error) {
      console.log("Appwrite Service :: getJokes :: error", error);
    }
  }
}

const service = new Service();
export default service;
