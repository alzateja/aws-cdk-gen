import {
  defaultInputErrorMessage,
  lettersAndSpacesInputErrorMessage,
  urlPathInputErrorMessage,
} from "../constants/message";

const lettersAndSpacesRegex = /^[a-zA-Z\s]+$/;
const isUrlPathRegex = /^\{1}+[a-z\/]*$/;

const checkRegexForMatch = (
  regex,
  inputErrorMessage = defaultInputErrorMessage
) => (string) => regex.test(string) || inputErrorMessage;

export const validateLettersAndSpaces = checkRegexForMatch(
  lettersAndSpacesRegex,
  lettersAndSpacesInputErrorMessage
);
export const validateUrlPathInput = checkRegexForMatch(
  isUrlPathRegex,
  urlPathInputErrorMessage
);
