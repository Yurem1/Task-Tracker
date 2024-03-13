import { IHTTPConstants } from '@/utilities/interfaces';

export class HTTPConstants {
  public static ACCOUNT_ALREADY_EXISTS: IHTTPConstants = {
    status: 409,
    statusText: 'Account already exists!'
  };

  public static ACCOUNT_NOT_FOUND: IHTTPConstants = {
    status: 404,
    statusText: 'Account not found.'
  }

  public static ACCOUNT_CREATED_SUCCESSFULLY: IHTTPConstants = {
    status: 200,
    statusText: 'Account created successfully.'
  }

  public static ACCOUNT_FOUND_SUCCESSFULLY: IHTTPConstants = {
    status: 200,
    statusText: 'Account found successfully.'
  }
}
