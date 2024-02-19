#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { TheListStack } from "../lib/the-list-stack";
import { getCdkEnv } from "@the-list/env";

const Environment = getCdkEnv(process.env);

const app = new cdk.App();
const listStack = new TheListStack(app, "TheListStack", {
  env: {
    account: Environment.AWS_ACCOUNT_ID,
    region: Environment.AWS_REGION,
  },
});

cdk.Tags.of(listStack).add("name", "gth-labs/the-list");
