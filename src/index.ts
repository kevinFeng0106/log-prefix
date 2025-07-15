import { PrefixConsoleLogParams } from "./types";
import { getRuntimeConsole } from "./utils";

const originConsole = getRuntimeConsole();

export default class PrefixConsole {
  private prefix: string;

  constructor(prefix: string) {
    this.prefix = prefix;
  };

  public log(...args: PrefixConsoleLogParams) {
    const prefixWithplaceholder = `${this.prefix} %s`;
    return originConsole.log(prefixWithplaceholder, ...args);
  }
}
