import { handle } from "hono/aws-lambda";
import app from "@the-list/app";

export const handler = handle(app);
