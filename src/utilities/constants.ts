import { IHTTPConstants, ILogin } from '@/utilities/interfaces';

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
    statusText: 'Account created successfully'
  },
  ACCOUNT_FOUND_SUCCESSFULLY: {
    status: 200,
    statusText: 'Account found successfully.'
  }
} satisfies Record<string, IHTTPConstants>
