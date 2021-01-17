package main

import (
	"encoding/json"
	"strconv"
	"strings"
	"time"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

type FibResultArray []FibResult

type FibResult map[string]int

func main() {
	lambda.Start(Handler)
}

func Handler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	startTime := time.Now()
	queryParams := request.QueryStringParameters["fib"]
	fibInputs := []string{}

	if queryParams != "" {
		fibInputs = strings.Split(queryParams, ",")
	} else {
		fibInputs = []string{"30"}
	}

	fibResults := evaluateFibNums(fibInputs)
	endTime := time.Now()
	diff := endTime.Sub(startTime).Microseconds()
	resultBody := map[string]interface{}{
		"fibResults":          fibResults,
		"timeElapsedMicrosec": diff,
	}
	mapB, _ := json.Marshal(resultBody)

	return events.APIGatewayProxyResponse{
		Body:       string(mapB),
		StatusCode: 200,
	}, nil
}

func evaluateFibNums(fibNumbers []string) FibResultArray {
	resultArray := FibResultArray{}
	for _, v := range fibNumbers {
		input, _ := strconv.Atoi(v)
		f := fibonacci()
		output := 0
		for i := 0; i < input; i++ {
			output = f()
		}
		result := FibResult{"input": input, "output": output}
		resultArray = append(resultArray, result)
	}
	return resultArray
}

func fibonacci() func() int {
	x, y := 0, 1
	return func() int {
		x, y = y, x+y
		return x
	}
}
