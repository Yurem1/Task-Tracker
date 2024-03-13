/**
 * @interface
 * Represents the login information to be used for authentication.
 */
export interface ILogin {
  username: string;
  password: string;
}

/**
 * @interface
 * Represents the tasks data for the user profile.
 */
export interface ITasks {
  dataCreated: string;
  name: string;
  value: string;
}

/**
 * @interface
 * Represents the user profile information
 */
export interface IProfile {
  username: string;
  password: string;
  tasks: ITasks[];
}

/**
 * @interface
 * Represents the interface for HTTP constants.
 */
export interface IHTTPConstants {
  status: number;
  statusText: string;
}