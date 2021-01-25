import { cwd, rootPath } from "../utils/path";

// Lambda Output Handler Paths
export const goLambdaFunctionPath = cwd + "/lambda/go/{{camelCase lambda}}/";
export const jsLambdaFunctionPath = cwd + "/lambda/js/{{camelCase lambda}}/";
export const dynamoLambdaFunctionPath =
  cwd + "/lambda/dynamo/{{camelCase lambda}}/";

// CDK Construct Output Paths
export const cdkOutput = cwd + "/lib/";
export const dynamoCDKPath = cdkOutput + "dynamo/";
export const gatewayCDKPath = cdkOutput + "gateway/";
export const lambdaCDKPath = cdkOutput + "lambda/";
export const integrationCDKPath = cdkOutput + "integration/";
export const s3CDKPath = cdkOutput + "bucket/";

// Generator Template Paths
export const baseTemplatePath = rootPath + "/templates/";
export const addRouteTemplatePath = baseTemplatePath + "add-route/";
export const dynamoLambdaTemplatePath = baseTemplatePath + "dynamo-lambda/";
export const gatewayTemplatePath = baseTemplatePath + "gateway/";
export const goLambdaTemplatePath = baseTemplatePath + "go-lambda/";
export const jsLambdaTemplatePath = baseTemplatePath + "js-lambda/";
export const lambdaIntegrationTemplatePath = baseTemplatePath + "lambda-int/";
export const s3BucketTemplatePath = baseTemplatePath + "s3-bucket/";
