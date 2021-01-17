import {
  jsLambdaFunctionPath,
  templatePath,
  lambdaCDKPath,
  integrationCDKPath,
} from "../constants";

const jsLambdaGenerator = (plop) => {
  plop.setGenerator("Create a NodeJS Lambda", {
    description:
      "Generate a NodeJS Lambda with an example handler. Uses experimental construct.",
    prompts: [
      {
        type: "input",
        name: "lambda",
        message: "What is the name of the Lambda?",
      },
    ],
    actions: [
      "We will now begin the process of scaffolding a NodeJS Lambda.",
      "We will now attempt to copy over our handler example. It is a basic fibonacci function.",
      {
        type: "copy",
        dest: jsLambdaFunctionPath + "handler.js",
        src: templatePath + "js-lambda/function/handler.js",
      },
      "We will now attempt to create our NodeJS Lambda Construct.",
      {
        type: "add",
        path: lambdaCDKPath + "{{dashCase lambda}}-js-lambda.ts",
        skipIfExists: true,
        templateFile: templatePath + "js-lambda/lambda.hbs",
      },
      "We will now attempt to create a Lambda Proxy Integration for an HTTP API.",
      {
        type: "add",
        path: integrationCDKPath + "{{dashCase lambda}}-js-integration.ts",
        skipIfExists: true,
        templateFile: templatePath + "lambda-int/js-integration.hbs",
      },
      "Successfully created a NodeJS Lambda!",
    ],
  });
};

export default jsLambdaGenerator;
