import { getDefinedStdOut, getRuntimeConsole } from "./utils";

const originConsole = getRuntimeConsole();

export default class PrefixConsole {
  private prefix: string;
  private console: typeof originConsole;

  constructor(
    prefix: string,
    stdout?: NodeJS.WritableStream,
    stderr?: NodeJS.WritableStream,
    ignoreErrors?: boolean,
  ) {
    if (typeof global !== "undefined") {
      this.console = new originConsole.Console(
        getDefinedStdOut(stdout),
        stderr,
        ignoreErrors,
      );
    }
    else {
      this.console = originConsole;
    }
    this.prefix = prefix;
  };

  public log(message?: any, ...optionalParams: any[]) {
    const prefixWithPlaceholder = `${this.prefix} %s`;
    return this.console.log(prefixWithPlaceholder, message, ...optionalParams);
  };

  public assert(value: unknown, message?: unknown, ...optionalParams: unknown[]): void {
    const prefixWithPlaceholder = `${this.prefix} %s`;
    this.console.assert(value, prefixWithPlaceholder, message, ...optionalParams);
  };

  public debug(message?: unknown, ...optionalParams: unknown[]): void {
    const prefixWithPlaceholder = `${this.prefix} %s`;
    this.console.debug(prefixWithPlaceholder, message, ...optionalParams);
  };

  public error(message?: unknown, ...optionalParams: unknown[]): void {
    const prefixWithPlaceholder = `${this.prefix} %s`;
    this.console.error(prefixWithPlaceholder, message, ...optionalParams);
  };

  public warn(message?: unknown, ...optionalParams: unknown[]): void {
    const prefixWithPlaceholder = `${this.prefix} %s`;
    this.console.warn(prefixWithPlaceholder, message, ...optionalParams);
  };

  public info(message?: unknown, ...optionalParams: unknown[]): void {
    const prefixWithPlaceholder = `${this.prefix} %s`;
    this.console.info(prefixWithPlaceholder, message, ...optionalParams);
  };

  public trace(message?: unknown, ...optionalParams: unknown[]): void {
    const prefixWithPlaceholder = `${this.prefix} %s`;
    this.console.trace(prefixWithPlaceholder, message, ...optionalParams);
  };

  public clear(): void {
    this.console.clear();
  };

  public count(label?: string): void {
    this.console.count(label);
  };

  public countReset(label?: string): void {
    this.console.countReset(label);
  };

  public dir(obj?: unknown, options?: unknown): void {
    this.console.dir(obj, options);
  };

  public dirxml(...data: any[]): void {
    this.console.dirxml(...data);
  };

  public group(...label: any[]): void {
    this.console.group(...label);
  };

  public groupCollapsed(...label: any[]): void {
    this.console.groupCollapsed(...label);
  };

  public groupEnd(): void {
    this.console.groupEnd();
  };

  public table(tabularData: any, properties?: readonly string[]): void {
    this.console.table(tabularData, properties);
  };

  public time(label?: string): void {
    this.console.time(label);
  };

  public timeEnd(label?: string): void {
    this.console.timeEnd(label);
  };

  public timeLog(label?: string, ...data: any[]): void {
    this.console.timeLog(label, ...data);
  };

  public timeStamp(label?: string): void {
    this.console.timeStamp(label);
  };

  public profile(label?: string): void {
    this.console.profile(label);
  };

  public profileEnd(label?: string): void {
    this.console.profileEnd(label);
  };
}
