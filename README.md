Typescript AWS CDK Generator: aws-cdk-gen
======

This project allows you to generate Typescript constructs for a variety of common AWS CDK use cases. It was built using [PlopJS](https://plopjs.com/).

Why?
----
The hope is that you will be able to use this tool to remove boilerplate code and get 90% of the code needed with a few key strokes.

 Additionally, new developers can learn how to connect CDK constructs in a project with minimum changes.

Library In Action
----
Here is an example of generating a Go Lambda.

![alt text](https://github.com/alzateja/aws-cdk-gen/blob/main/assets/example-run.gif "Generation in action")

Here is an example of the outputted files.

![alt text](https://github.com/alzateja/aws-cdk-gen/blob/main/assets/generator-output.png "Generator output")

As you can see it generates the Lambda construct, a Lambda integration, and a directory that contains a Go program as well as a build script.  This gives a developer all they need to get started.

Caveats
----
This tool has a few caveats.

1. This tool is opinionated in the sense that it generates files at set paths.

2. This initial version is based on aws-cdk version 1.85.0. As a result, it may not work with older CDK projects.

3. There are a number of experimental constructs used in this package that are not in active development. As a result, some of the construct's may not work in the future. I plan on moving to more stable constructs in future releases.

4. The user needs to install any missing dependencies.

Installation
------------

    npm install --save-dev aws-cdk-gen
Getting started
------

Create a script in your package.json to generate CDK constructs. For example

```json
"scripts": {
    "aws-cdk-gen": "aws-cdk-gen"
}
```

Run your script and that's it!

Base Generators Available
-----
There a few constructs available upon starting the tool in a new CDK project. Below is a screenshot of the initial options available.

![alt text](https://github.com/alzateja/aws-cdk-gen/blob/main/assets/initial-options.png "Initial available options")

Here are a description of the various options.


* **Go Lambda** - Generate a Go Lambda with an example handler. You need to build the Go artifact to successfully deploy. Please follow the README in the generated handler files. Uses experimental construct.
    * Inputs:
        * Lambda Name
    * Outputs:
        * S3 Asset
        * Standard Lambda Function
        * Api Gateway V2 Lambda Integration
        * example Go main file
        * README on build process
        * shell script to automate build

* **NodeJS Lambda** - Generate a NodeJS Lambda with an example handler. Uses experimental construct.
    * Inputs:
        * Lambda Name
    * Outputs:
        * NodeJS Experimental Lambda Function
        * Api Gateway V2 Lambda Integration
        * example JS handler

* **S3 Bucket** - Basic S3 Bucket construct.
   * Inputs:
        * Bucket Name
    * Outputs:
        * S3 Bucket Construct

* **API Gateway** - Generate an API Gateway. Needed to add a Lambda Route or generate a DynamoDb stack.
   * Inputs:
        * Api Gateway Name
    * Outputs:
        * Api GatewayV2 Construct


**Note:** The comments in the generated API Gateway construct file are used to inject code. It is not recommended to delete them.


Generators Available With Dependencies
-----

There are a few generators that are dependent on other constructs to have been generated. As a result, they are initially hidden from the user.

Below is a screenshot of the hidden options available.

![alt text](https://github.com/alzateja/aws-cdk-gen/blob/main/assets/all-options.png "all available options")

Here are a description of the various options.

* **Add Lambda Route** - Generate a route for a Lambda to an existing API Gateway. Requires the creation of both a `Lambda` and an `API Gateway` to see the options.
   * Inputs:
        * Select API GatewayV2 - select from list of previously generated gateways.
        * Select API GatewayV2 Lambda Integration - select from list of previously generated lambda integrations.
        * Define Route for Lambda - enter string for route. Ex. "/users/".
    * Outputs:
        * Imports Lambda Integration into Api Gateway construct. Adds a route for the Lambda to the Gateway.

* **DynamoDB and Lambdas** - Generate a DynamoDB table and 4 Lambdas with example handlers. The handlers cover `GET`, `POST`, `PUT`, and `DELETE`. You will need to configure a data schema to properly use this function. Requires the creation of an `API Gateway` to see the option.
   * Inputs:
        * Select API GatewayV2 - select from list of previously generated gateways.
        * Name your Table - Enter string for your table.
        * Select a name for your Lambdas - Enter string for Lambdas. Will be used for all 4 Lambdas.
        * Define Route for Lambdas - enter string for route. Ex. "/users/". Will be used for all 4 Lambdas.
    * Outputs:
        * Will have one main DynamoDB construct. It contains:
            * 1 DynamoDB Table
            * 4 NodeJS Lambdas granted access to the table and passed the table name as environment variable
            * 4 LambdaProxy Integrations
        * Will output a handler folder with 4 different JS handler files.
        * Will add 4 routes to the API Gateway that you selected.

License
-------

Licensed under MIT

Copyright (c) 2021 [Jayson Alzate](https://github.com//alzateja)
