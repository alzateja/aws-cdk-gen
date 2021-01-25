import { addRouteTemplatePath, gatewayCDKPath } from "../constants/path";
import { validateUrlPathInput } from "../utils/validation";

const addRouteGenerator = (plop, gatewayChoices, integrationChoices) => {
  plop.setGenerator("Add Lambda Route", {
    description: "Generate a route for a Lambda.",
    prompts: [
      {
        type: "list",
        choices: gatewayChoices,
        name: "api-gateway",
        message: "What is the Api Gateway you want to add a route to?",
      },
      {
        type: "list",
        choices: integrationChoices,
        name: "lambda",
        message: "What is the Lambda you want to add route for?",
      },
      {
        type: "input",
        name: "route",
        message: "What is the route you want to define for this lambda?",
        default: "/",
        validate: validateUrlPathInput,
      },
    ],
    actions: [
      "We will now attempt to add a route to your Lambda.",
      "We will now attempt to import the integration.",
      {
        type: "append",
        path: gatewayCDKPath + "{{dashCase api-gateway}}-gateway.ts",
        pattern: /(-- Import Integrations --)/gi,
        templateFile: addRouteTemplatePath + "import.hbs",
      },
      "We will now attempt to initialize the integration within the gateway.",
      {
        type: "append",
        path: gatewayCDKPath + "{{dashCase api-gateway}}-gateway.ts",
        pattern: /(-- Define Integrations --)/gi,
        templateFile: addRouteTemplatePath + "integration.hbs",
      },
      "We will now add a route to the gateway and pass in the integration.",
      {
        type: "append",
        path: gatewayCDKPath + "{{dashCase api-gateway}}-gateway.ts",
        pattern: /(-- Define Routes --)/gi,
        templateFile: addRouteTemplatePath + "route.hbs",
      },
      "Successfully created a route to our Lambda!",
    ],
  });
};

export default addRouteGenerator;
