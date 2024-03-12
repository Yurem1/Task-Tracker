import { MongoClient, Collection } from 'mongodb';

export class Mongo {
  private mongoClient: MongoClient;
  private collection: Collection;

  public constructor() {
    this.mongoClient = new MongoClient(process.env.MONGO_URI as string);
    this.collection = this.mongoClient.db('task-tracker').collection('tasks');
  }

  public get dbCollection(): Collection {
    return this.collection;
  }
}