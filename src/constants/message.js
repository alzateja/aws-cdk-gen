export const welcomeMessage = `
Welcome to the AWS CDK generator. This works with aws-cdk v1.85.0.

Note: Certain constructs are dependent on generation of other assets.
1) "Add Lambda Route"  - requires an API gateway and Lambda.
2) "Generating a DynamoDb table" - requires an API gateway.

What do you want to generate?
`;

export const defaultInputErrorMessage =
  "That is not a valid input. Please try again";

export const lettersAndSpacesInputErrorMessage = `
This input only takes spaces and letters, like:
  "My construct" or "myconstruct"
`;

export const urlPathInputErrorMessage = `
This input only takes lowercase letters and "/". It must also start with a "/", like:
  "/myroute" or "/my/route" or "/"
`;
