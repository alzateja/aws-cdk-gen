import { getChoices } from "../utils";
import {
  templatePath,
  gatewayCDKPath,
  dynamoLambdaFunctionPath,
  dynamoCDKPath,
} from "../constants";

const dynamoLambdaGenerator = (plop) => {
  const gatewayChoices = getChoices(gatewayCDKPath, "-gateway.ts");
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
        name: "route",
        message: "What is the route you want to define it to?",
        default: "/",
      },
      {
        type: "input",
        name: "lambda",
        message: "What is the name of your Lambdas?",
      },
      {
        type: "input",
        name: "table",
        message: "What is the name of your table?",
      },
    ],
    actions: [
      "We will now attempt to add a DynamoDB Table and Lambdas.",
      "We will now attempt to generate our DynamoDB tables and Lambda constructs.",
      {
        type: "add",
        path: dynamoCDKPath + "{{dashCase lambda}}-dynamo-lambda.ts",
        templateFile: templatePath + "dynamo-lambda/dynamo-lambda.hbs",
      },
      "We will now attempt to import the DynamoDB construct.",
      {
        type: "append",
        path: gatewayCDKPath + "{{dashCase api-gateway}}-gateway.ts",
        pattern: /(-- Import Integrations --)/gi,
        templateFile: templatePath + "dynamo-lambda/import.hbs",
      },
      "We will now attempt to initialize the integrations within the gateway.",
      {
        type: "append",
        path: gatewayCDKPath + "{{dashCase api-gateway}}-gateway.ts",
        pattern: /(-- Define Integrations --)/gi,
        templateFile: templatePath + "dynamo-lambda/integration.hbs",
      },
      "We will now add routes to the gateway and pass in the integrations.",
      {
        type: "append",
        path: gatewayCDKPath + "{{dashCase api-gateway}}-gateway.ts",
        pattern: /(-- Define Routes --)/gi,
        templateFile: templatePath + "dynamo-lambda/route.hbs",
      },
      "We will now attempt to copy over our handlers example for GET, DEL, PUT, and POST.",
      {
        type: "copyDir",
        dest: dynamoLambdaFunctionPath,
        src: templatePath + "dynamo-lambda/handlers",
      },
      "Successfully created a DynamoDB Table and Lambdas.",
      "Note: You have to define your data structure to have this work properly.",
    ],
  });
};

export default dynamoLambdaGenerator;
