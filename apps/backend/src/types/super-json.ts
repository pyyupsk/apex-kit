import type { Context, TypedResponse } from "hono";
import type { Env } from "hono/types";
import type { StatusCode } from "hono/utils/http-status";
import type superjson from "superjson";

export type ContextWithSuperJSON<E extends Env> = Context<E> & SuperJSONHandler;

export type SuperJSONHandler = {
  superjson: <T>(_data: T, _status?: number) => SuperJSONTypedResponse<T>;
};

export type SuperJSONParsedType<T> = ReturnType<typeof superjson.parse<T>>;

export type SuperJSONTypedResponse<T, U extends StatusCode = StatusCode> = TypedResponse<
  SuperJSONParsedType<T>,
  U,
  "json"
>;
