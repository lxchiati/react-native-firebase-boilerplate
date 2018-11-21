const APP_NAME = 'my-app';
export enum AppActionTypes {
  APP_INITIALIZE_REQUEST = 'app/INITIALIZE_REQUEST',
  APP_INITIALIZED_SET = 'app/INITIALIZE_SET',
  APP_INITIALIZE_ERROR = 'app/INITIALIZE_ERROR',
}
export enum AuthActionTypes {
  AUTH_STATE_CHANGE_SET = 'auth/STATE_CHANGE_SET',
  AUTH_ADDITIONAL_USER_INFO_SET = 'auth/AUTH_ADDITIONAL_USER_INFO_SET',
  AUTH_ERROR_SET = 'auth/ERROR_SET',
  AUTH_LOGIN_REQUEST = 'auth/LOGIN_REQUEST',
  AUTH_LOGOUT_REQUEST = 'auth/LOGOUT_REQUEST',
  AUTH_ANONYMOUS_LOGIN_REQUEST = 'auth/ANONYMOUS_LOGIN_REQUEST',
  AUTH_FACEBOOK_LOGIN_REQUEST = 'auth/FACEBOOK_LOGIN_REQUEST',
  AUTH_EMAIL_PASSWORD_LOGIN_REQUEST = 'auth/EMAIL_PASSWORD_LOGIN_REQUEST',
  AUTH_CREATE_EMAIL_PASSWORD_USER_REQUEST = '/auth/CREATE_EMAIL_PASSWORD_USER_REQUEST'
}
export enum ErrorActionTypes {
  ERROR_SET = 'app/ERROR_SET',
  ERROR_CLEAR = 'app/ERROR_CLEAR',
  ERROR_CLEAR_ALL = 'app/ERROR_CLEAR_ALL'
}

export enum PermissionsActionTypes {
  PERMISSIONS_ALL_GET = 'permissions/ALL_GET',
  PERMISSIONS_REQUEST = 'permissions/REQUEST',
  PERMISSIONS_ALL_SET = 'permissions/ALL_SET'
}

export enum NotificationsActionTypes {
  NOTIFICATIONS_PAYLOAD_SET = 'notifications/PAYLOAD_SET',
  NOTIFICATIONS_PAYLOAD_CLEAR = 'notifications/PAYLOAD_CLEAR'
}
