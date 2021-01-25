import { validateLettersAndSpaces } from "../utils/validation";

export const lambdaInput = {
  type: "input",
  name: "lambda",
  message: "What is the name of the Lambda?",
  validate: validateLettersAndSpaces,
};
