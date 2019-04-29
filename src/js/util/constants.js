var constants = {};

constants.ELEMENT_EVENT_ID = "ELEMENT_EVENT_ID";
constants.MODEL_VERSION = '{"major": 1, "minor": 0, "patch": 0}';

constants.LOCAL_USERNAME_PREFIX = 'local-user-';
constants.LOCAL_NOLOGIN_USERNAME = constants.LOCAL_USERNAME_PREFIX + 'default-user';
constants.USERNAME_REGEX = /^[a-z][a-z0-9_+-]*$/;

constants.VALIDATION_ERROR_REGEX = 'VALIDATION_ERROR_REGEX';
constants.VALIDATION_ERROR_EXISTING = 'VALIDATION_ERROR_EXISTING';

constants.EVENT_DB_CONNECTION_LOST = 'EVENT_DB_CONNECTION_LOST';
constants.EVENT_DB_PULL_UPDATED = 'EVENT_DB_PULL_UPDATED';
constants.EVENT_DB_SYNC_STATE_CHANGE = 'EVENT_DB_SYNC_STATE_CHANGE';

constants.DB_SYNC_STATE_SYNCINC = 'DB_SYNC_STATE_SYNCINC';
constants.DB_SYNC_STATE_SYNCED = 'DB_SYNC_STATE_SYNCED';
constants.DB_SYNC_STATE_STOPPED = 'DB_SYNC_STATE_STOPPED';
constants.DB_SYNC_STATE_FAIL = 'DB_SYNC_STATE_FAIL';
constants.DB_SYNC_STATE_ONLINEONLY = 'DB_SYNC_STATE_ONLINEONLY';

constants.ENVIRONMENT = '#ASTERICS_GRID_ENV#';
constants.IS_ENVIRONMENT_DEV = constants.ENVIRONMENT === ('#ASTERICS_' + 'GRID_ENV#');
constants.IS_ENVIRONMENT_PROD = !constants.IS_ENVIRONMENT_DEV;

export {constants};