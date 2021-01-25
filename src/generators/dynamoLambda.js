import {
  gatewayCDKPath,
  dynamoLambdaFunctionPath,
  dynamoCDKPath,
  dynamoLambdaTemplatePath,
} from "../constants/path";
import {
  validateLettersAndSpaces,
  validateUrlPathInput,
} from "../utils/validation";

const dynamoLambdaGenerator = (plop, gatewayChoices) => {
  plop.setGenerator("Generate a DynamoDb table, Node Lambdas, and routes", {
    description:
      "Needs added configuration after scaffolding to work properly.",
    prompts: [
      {
        type: "list",
        choices: gatewayChoices,
        name: "api-gateway",
        message: "What is the Gateway you want to add the routes to?",
      },
      {
        type: "input",
        name: "table",
        message: "What is the name of your table?",
        validate: validateLettersAndSpaces,
      },
      {
        type: "input",
        name: "lambda",
        message: "What is the base name for your lambdas?",
        validate: validateLettersAndSpaces,
      },
      {
        type: "input",
        name: "route",
        message: "What is the route you want to define for your lambdas?",
        default: "/",
        validate: validateUrlPathInput,
      },
    ],
    actions: [
      "We will now attempt to add a DynamoDB Table and Lambdas.",
      "We will now attempt to generate our DynamoDB tables and Lambda constructs.",
      {
        type: "add",
        path: dynamoCDKPath + "{{dashCase lambda}}-dynamo-lambda.ts",
        templateFile: dynamoLambdaTemplatePath + "dynamo-lambda.hbs",
      },
      "We will now attempt to import the DynamoDB construct.",
      {
        type: "append",
        path: gatewayCDKPath + "{{dashCase api-gateway}}-gateway.ts",
        pattern: /(-- Import Integrations --)/gi,
        templateFile: dynamoLambdaTemplatePath + "import.hbs",
      },
      "We will now attempt to initialize the integrations within the gateway.",
      {
        type: "append",
        path: gatewayCDKPath + "{{dashCase api-gateway}}-gateway.ts",
        pattern: /(-- Define Integrations --)/gi,
        templateFile: dynamoLambdaTemplatePath + "integration.hbs",
      },
      "We will now add routes to the gateway and pass in the integrations.",
      {
        type: "append",
        path: gatewayCDKPath + "{{dashCase api-gateway}}-gateway.ts",
        pattern: /(-- Define Routes --)/gi,
        templateFile: dynamoLambdaTemplatePath + "route.hbs",
      },
      "We will now attempt to copy over our handlers example for GET, DEL, PUT, and POST.",
      {
        type: "copy directory",
        dest: dynamoLambdaFunctionPath,
        src: dynamoLambdaTemplatePath + "handlers",
      },
      "Successfully created a DynamoDB Table and Lambdas.",
      "Note: You have to define your data structure to have this work properly.",
    ],
  });
};

export default dynamoLambdaGenerator;
