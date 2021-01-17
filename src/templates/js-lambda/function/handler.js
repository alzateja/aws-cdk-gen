const startTime = Date.now();
const fibonacci = (num) => {
  var a = 1,
    b = 0,
    temp;

  while (num > 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
};

const evaluateFibNumber = (numberString) => {
  const input = Number.parseInt(numberString);
  const output = fibonacci(input);
  return { input, output };
};

export const handler = async (event) => {
  const queryParam = event?.queryStringParameters?.fib;
  const fibNumbers = queryParam ? queryParam.split(",") : ["30"];

  const fibResults = fibNumbers.map(evaluateFibNumber);
  const endTime = Date.now();
  const diff = endTime - startTime;
  const body = {
    fibResults,
    timeElapsedMicrosec: diff * 1000,
  };
  return {
    body: JSON.stringify(body),
    statusCode: 200,
  };
};
