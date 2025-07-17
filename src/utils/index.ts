/**
 * 根据不同的环境获取 console 对象
 * @returns console
 */
export const getRuntimeConsole = () => {
  if (typeof window !== "undefined") return window.console;
  if (typeof global !== "undefined") return global.console;
  return globalThis.console;
};

export const getDefinedStdOut = (stdout?: NodeJS.WritableStream) => {
  return stdout || process.stdout;
};
