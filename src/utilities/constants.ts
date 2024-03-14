import { IHTTPConstants, ILogin, IProfile } from '@/utilities/interfaces';
import { ObjectId } from 'mongodb';

/**
 * @constant
 * Constants related to forms.
 */
export const FormConstants = {
  /**
   * @constant
   * Default values for form fields.
   */
  DEFAULT_VALUE: {
    username: '',
    password: ''
  }

} satisfies Record<string, ILogin>;

/**
 * @constants
 * Represents the profile constants for the task tracker application.
 */
export const ProfileConstants = {
  /**
   * The default profile object.
   */
  DEFAULT_PROFILE: {
    username: '',
    password: '',
    tasks: [],
  }
} satisfies Record<string, IProfile>;

/**
 * @constant
 * HTTP Constants object that contains predefined status codes and status texts.
 */
export const HTTPConstants = {
  ACCOUNT_ALREADY_EXISTS: {
    status: 409,
    statusText: 'Account already exists!'
  },
  ACCOUNT_NOT_FOUND: {
    status: 404,
    statusText: 'Account not found.'
  },
  ACCOUNT_CREATED_SUCCESSFULLY: {
    status: 200,
    statusText: 'Account created successfully.'
  },
  ACCOUNT_FOUND_SUCCESSFULLY: {
    status: 200,
    statusText: 'Account found successfully.'
  },
  ACCOUNT_POSTED_SUCCESSFULLY: {
    status: 200,
    statusText: 'Account posted successfully.'
  }
} satisfies Record<string, IHTTPConstants>
