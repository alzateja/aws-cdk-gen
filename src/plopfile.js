import { welcomeMessage } from "./constants/message";
import apiGatewayGenerator from "./generators/gateway";
import s3BucketGenerator from "./generators/s3Bucket";
import goLambdaGenerator from "./generators/goLambda";
import jsLambdaGenerator from "./generators/jsLambda";
import addRouteGenerator from "./generators/addRoute";
import dynamoLambdaGenerator from "./generators/dynamoLambda";
import { getChoices } from "./utils/choices";
import { integrationCDKPath, gatewayCDKPath } from "./constants/path";

const runAWSCdkGenerator = (plop) => {
  const gatewayChoices = getChoices(gatewayCDKPath, "-gateway.ts");
  const integrationChoices = getChoices(integrationCDKPath, "-integration.ts");
  plop.load("./actions/copy");
  plop.setWelcomeMessage(welcomeMessage);
  s3BucketGenerator(plop);
  apiGatewayGenerator(plop);
  goLambdaGenerator(plop);
  jsLambdaGenerator(plop);

  if (gatewayChoices) {
    dynamoLambdaGenerator(plop, gatewayChoices);
    if (integrationChoices) {
      addRouteGenerator(plop, gatewayChoices, integrationChoices);
    }
  }
};

export default runAWSCdkGenerator;
