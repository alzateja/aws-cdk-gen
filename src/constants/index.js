import path from "path";

export const rootPath = path.join(__dirname, "..");

export const cwd = process.cwd();

export const welcomeMessage = `
Welcome to the AWS CDK generator. This works with aws-cdk v1.85.0.

Note: Certain constructs are dependent on generation of other assets.
1) "Add Lambda Route"  - requires an API gateway and Lambda.
2) "Generating a DynamoDb table" - requires an API gateway.

What do you want to generate?
`;

export const goLambdaFunctionPath = cwd + "/lambda/go/{{camelCase lambda}}/";
export const jsLambdaFunctionPath = cwd + "/lambda/js/{{camelCase lambda}}/";
export const dynamoLambdaFunctionPath =
  cwd + "/lambda/dynamo/{{camelCase lambda}}/";

export const dynamoCDKPath = cwd + "/lib/dynamo/";
export const gatewayCDKPath = cwd + "/lib/gateway/";
export const lambdaCDKPath = cwd + "/lib/lambda/";
export const integrationCDKPath = cwd + "/lib/integration/";
export const s3CDKPath = cwd + "/lib/bucket/";
export const templatePath = rootPath + "/templates/";
