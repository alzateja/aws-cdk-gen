import { gatewayCDKPath, templatePath } from "../constants";

const apiGatewayGenerator = (plop) => {
  plop.setGenerator("Generate an Api Gateway", {
    description:
      "Generate an API Gateway. Needed to add a Lambda Route or generate a DynamoDb stack.",
    prompts: [
      {
        type: "input",
        name: "gateway",
        message: "What is the name of your API gateway?",
      },
    ],
    actions: [
      "We will now attempt to create an API gateway construct.",
      {
        type: "add",
        path: gatewayCDKPath + "{{dashCase gateway}}-gateway.ts",
        templateFile: templatePath + "gateway/gateway.hbs",
      },
      "Successfully created an API gateway!",
    ],
  });
};

export default apiGatewayGenerator;
