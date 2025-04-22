import type { Env } from "hono/types";

import type { ContextWithSuperJSON } from "./super-json";

export type TrpcContext<E extends Env> = ContextWithSuperJSON<E>;
