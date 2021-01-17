import fs from "fs-extra";

const removeString = (filteredWords) => (word) =>
  word.replace(filteredWords, "");

const getName = (file) => file.name;

export const getChoices = (directory, filteredWord = "") => {
  if (fs.existsSync(directory)) {
    const dirFilesArray =
      fs.readdirSync(directory, { withFileTypes: true }) || [];
    const getNameArray = dirFilesArray.map(getName);
    const formattedArray = getNameArray.map(removeString(filteredWord));
    return formattedArray;
  }
};
