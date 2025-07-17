import PrefixConsole from "@moonlord/log-prefix";

const prefixConsole = new PrefixConsole("[PrefixConsole]");

prefixConsole.log("[log] Hello %s", "World!");

prefixConsole.warn("[warn] Hello %s", "World!");

prefixConsole.error("[error] Hello %s", "World!");

prefixConsole.debug("[debug] Hello %s", "World!");

prefixConsole.info("[info] Hello %s", "World!");

prefixConsole.trace("[trace] Hello %s", "World!");

prefixConsole.table([{ a: 1, b: 2 }, { a: 3, b: 4 }]);
