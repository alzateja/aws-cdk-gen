import { lambdaInput } from "../common/input";
import {
  jsLambdaFunctionPath,
  lambdaCDKPath,
  integrationCDKPath,
  jsLambdaTemplatePath,
  lambdaIntegrationTemplatePath,
} from "../constants/path";

const jsLambdaGenerator = (plop) => {
  plop.setGenerator("Create a NodeJS Lambda", {
    description:
      "Generate a NodeJS Lambda with an example handler. Uses experimental construct.",
    prompts: [lambdaInput],
    actions: [
      "We will now begin the process of scaffolding a NodeJS Lambda.",
      "We will now attempt to copy over our handler example. It is a basic fibonacci function.",
      {
        type: "copy",
        dest: jsLambdaFunctionPath + "handler.js",
        src: jsLambdaTemplatePath + "function/handler.js",
      },
      "We will now attempt to create our NodeJS Lambda Construct.",
      {
        type: "add",
        path: lambdaCDKPath + "{{dashCase lambda}}-js-lambda.ts",
        skipIfExists: true,
        templateFile: jsLambdaTemplatePath + "lambda.hbs",
      },
      "We will now attempt to create a Lambda Proxy Integration for an HTTP API.",
      {
        type: "add",
        path: integrationCDKPath + "{{dashCase lambda}}-js-integration.ts",
        skipIfExists: true,
        templateFile: lambdaIntegrationTemplatePath + "js-integration.hbs",
      },
      "Successfully created a NodeJS Lambda!",
    ],
  });
};

export default jsLambdaGenerator;
