import { getLambdaEnv } from "@the-list/env";
import { Hono } from "hono";
const app = new Hono();

const { RANDOM_TEST } = getLambdaEnv(process.env);

app.get("/", (c) => c.text(`Here we go ${RANDOM_TEST}`));

export default app;
