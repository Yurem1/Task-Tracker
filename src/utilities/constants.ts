import { IHTTPConstants, ILogin, IProfile, ITasks } from '@/utilities/interfaces';
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
  },
} satisfies Record<string, IProfile>;

/**
 * @constant
 * Represents the task constants
 */
export const TaskConstants = {
  /**
   * The default task object.
   */
  DEFAULT_TASK: {
    name: '',
    value: '',
    dataCreated: new Date()
  }
} satisfies Record<string, ITasks>

/**
 * @constant
 * HTTP Constants object that contains predefined status codes and status texts.
 */
export const HTTPConstants = {
  /**
   * Account already exists constant.
   */
  ACCOUNT_ALREADY_EXISTS: {
    status: 409,
    statusText: 'Account already exists!'
  },
  /**
   * Account not found constant.
   */
  ACCOUNT_NOT_FOUND: {
    status: 404,
    statusText: 'Account not found.'
  },
  /**
   * Account created successfully constant.
   */
  ACCOUNT_CREATED_SUCCESSFULLY: {
    status: 200,
    statusText: 'Account created successfully.'
  },
  /**
   * Account found successfully constant.
   */
  ACCOUNT_FOUND_SUCCESSFULLY: {
    status: 200,
    statusText: 'Account found successfully.'
  },
  /**
   * Account posted successfully constant.
   */
  ACCOUNT_POSTED_SUCCESSFULLY: {
    status: 200,
    statusText: 'Account posted successfully.'
  },
  /**
   * Added a new task successfully constant.
   */
  ADDED_TASK_SUCCESSFULLY: {
    status: 200,
    statusText: 'Added a task successfully.'
  }
} satisfies Record<string, IHTTPConstants>
