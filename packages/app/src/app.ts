import { getLambdaEnv } from "@the-list/env";
import type { LambdaEvent, LambdaContext } from "hono/aws-lambda";
import { Hono } from "hono";

type Bindings = {
  event: LambdaEvent;
  context: LambdaContext;
};

const app = new Hono<{ Bindings: Bindings }>();

const { RANDOM_TEST } = getLambdaEnv(process.env);

app.get("/", (c) => c.text(`Here we go ${RANDOM_TEST}`));

export default app;
