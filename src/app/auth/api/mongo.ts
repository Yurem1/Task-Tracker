import { ILogin, IProfile } from '@/utilities/interfaces';
import { MongoClient, Collection, Db } from 'mongodb';

/**
 * @class
 * Represents a MongoDB connection and provides methods to interact with the database.
 */
export class Mongo {
  private client: MongoClient;
  private database: Db;
  private collection: Collection;

  /**
   * The profile used for authentication.
   */
  public readonly profile: ILogin;

  /**
   * Creates a new instance of the Mongo class.
   * @param _profile - The profile used for authentication.
   */
  public constructor(_profile: ILogin) {
    this.client = new MongoClient(process.env.MONGO_URI as string);
    this.database = this.client.db('task-tracker');
    this.collection = this.database.collection('tasks');

    this.profile = _profile;
  }

  /**
   * Returns the MongoDB collection used for database operations.
   */
  public get dbCollection(): Collection {
    return this.collection;
  }

  /**
   * Finds the profile in the database.
   * @returns A boolean that resolves when the profile is found.
   */
  public async doesProfileExist(): Promise<boolean> {
    const profile = await this.collection.findOne({
      ...this.profile
    });

    return !!profile;
  }

  /**
   * Adds the profile to the database.
   * @returns A promise that resolves when the profile is added.
   */
  public async addProfile(): Promise<void> {
    const profile: IProfile = {
      ...this.profile,
      tasks: []
    };

    if(await this.doesProfileExist()) {
      return;
    }

    await this.collection.insertOne(profile);	
  }
  
  /**
   * Fetches the user profile from the database.
   * @returns A Promise that resolves to the fetched profile or null if not found.
   */
  public async fetchProfile(): Promise<IProfile | null> {
    const req = await this.collection.findOne<IProfile>({
      ...this.profile
    });
    
    return req;
  }
}
