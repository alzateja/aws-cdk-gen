import { lambdaInput } from "../common/input";
import {
  goLambdaFunctionPath,
  lambdaCDKPath,
  lambdaIntegrationTemplatePath,
  integrationCDKPath,
  goLambdaTemplatePath,
} from "../constants/path";

const goLambdaGenerator = (plop) => {
  plop.setGenerator("Create a Go Lambda", {
    description:
      "Generate a Go Lambda with an example handler. Uses experimental construct.",
    prompts: [lambdaInput],
    actions: [
      "We will now begin the process of scaffolding a Go Lambda.",
      "We will now attempt to copy over our handler example and utils. It is a basic fibonacci function.",
      {
        type: "copy directory",
        dest: goLambdaFunctionPath,
        src: goLambdaTemplatePath + "function",
      },
      "We will now attempt to create our Go Lambda Construct.",
      {
        type: "add",
        path: lambdaCDKPath + "{{dashCase lambda}}-go-lambda.ts",
        skipIfExists: true,
        templateFile: goLambdaTemplatePath + "lambda.hbs",
      },
      "We will now attempt to create a Lambda Proxy Integration for an HTTP API.",
      {
        type: "add",
        path: integrationCDKPath + "{{dashCase lambda}}-go-integration.ts",
        skipIfExists: true,
        templateFile: lambdaIntegrationTemplatePath + "go-integration.hbs",
      },
      "Successfully created a Go Lambda!",
      "Note: To deploy follow the README.md in the handler folder.",
      "You need to make sure Go is installed locally for the build process to work.",
    ],
  });
};

export default goLambdaGenerator;
