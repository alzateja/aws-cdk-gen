module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": [
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint"
  ],
  "ignorePatterns": ["src/templates/**/*.js"],
  "rules": {
    "@typescript-eslint/explicit-module-boundary-types": 0
  }
};
