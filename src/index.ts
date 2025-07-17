import { getRuntimeConsole } from "./utils";

const originConsole = getRuntimeConsole();

export default class PrefixConsole {
  private prefix: string;

  constructor(prefix: string) {
    this.prefix = prefix;
  };

  public log(message?: any, ...optionalParams: any[]) {
    const prefixWithPlaceholder = `${this.prefix} %s`;
    return originConsole.log(prefixWithPlaceholder, message, ...optionalParams);
  };

  public assert(value: unknown, message?: unknown, ...optionalParams: unknown[]): void {
    const prefixWithPlaceholder = `${this.prefix} %s`;
    originConsole.assert(value, prefixWithPlaceholder, message, ...optionalParams);
  };

  public debug(message?: unknown, ...optionalParams: unknown[]): void {
    const prefixWithPlaceholder = `${this.prefix} %s`;
    originConsole.debug(prefixWithPlaceholder, message, ...optionalParams);
  };

  public error(message?: unknown, ...optionalParams: unknown[]): void {
    const prefixWithPlaceholder = `${this.prefix} %s`;
    originConsole.error(prefixWithPlaceholder, message, ...optionalParams);
  };

  public warn(message?: unknown, ...optionalParams: unknown[]): void {
    const prefixWithPlaceholder = `${this.prefix} %s`;
    originConsole.warn(prefixWithPlaceholder, message, ...optionalParams);
  };

  public info(message?: unknown, ...optionalParams: unknown[]): void {
    const prefixWithPlaceholder = `${this.prefix} %s`;
    originConsole.info(prefixWithPlaceholder, message, ...optionalParams);
  };

  public trace(message?: unknown, ...optionalParams: unknown[]): void {
    const prefixWithPlaceholder = `${this.prefix} %s`;
    originConsole.trace(prefixWithPlaceholder, message, ...optionalParams);
  };

  public clear(): void {
    originConsole.clear();
  };

  public count(label?: string): void {
    originConsole.count(label);
  };

  public countReset(label?: string): void {
    originConsole.countReset(label);
  };

  public dir(obj?: unknown, options?: unknown): void {
    originConsole.dir(obj, options);
  };

  public dirxml(...data: any[]): void {
    originConsole.dirxml(...data);
  };

  public group(...label: any[]): void {
    originConsole.group(...label);
  };

  public groupCollapsed(...label: any[]): void {
    originConsole.groupCollapsed(...label);
  };

  public groupEnd(): void {
    originConsole.groupEnd();
  };

  public table(tabularData: any, properties?: readonly string[]): void {
    originConsole.table(tabularData, properties);
  };

  public time(label?: string): void {
    originConsole.time(label);
  };

  public timeEnd(label?: string): void {
    originConsole.timeEnd(label);
  };

  public timeLog(label?: string, ...data: any[]): void {
    originConsole.timeLog(label, ...data);
  };

  public timeStamp(label?: string): void {
    originConsole.timeStamp(label);
  };

  public profile(label?: string): void {
    originConsole.profile(label);
  };

  public profileEnd(label?: string): void {
    originConsole.profileEnd(label);
  };
}
