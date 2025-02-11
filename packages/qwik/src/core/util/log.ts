import { qDev } from './qdev';

const STYLE = qDev
  ? `background: #564CE0; color: white; padding: 2px 3px; border-radius: 2px; font-size: 0.8em;`
  : '';

export const logError = (message?: any, ...optionalParams: any[]) => {
  const err = message instanceof Error ? message : new Error(message);
  // eslint-disable-next-line no-console
  console.error('%cQWIK ERROR', STYLE, err, ...optionalParams);
  return err;
};

export const logErrorAndStop = (message?: any, ...optionalParams: any[]) => {
  logError(message, ...optionalParams);
  // eslint-disable-next-line no-debugger
  debugger;
};

export const logWarn = (message?: any, ...optionalParams: any[]) => {
  // eslint-disable-next-line no-console
  if (qDev) {
    console.warn('%cQWIK WARN', STYLE, message, ...optionalParams);
  }
};

export const logDebug = (message?: string, ...optionalParams: any[]) => {
  if (qDev) {
    // eslint-disable-next-line no-console
    console.debug('%cQWIK', STYLE, message, ...optionalParams);
  }
};
