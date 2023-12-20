# Code Challenge: Thumbnail Generator API

## Goal

Build a simple API that generates thumbnails from a source image

## Requirements

- The API should provide at least 1 endpoint where the user will be able to POST the original image
- The API must **ONLY** accept PNG and JPEG files
- The API must reject input file bigger than **11mb**
- The API should give the user 3 new images with the following dimensions
  - 400x300
  - 160x120
  - 120x120

## Grading Guidelines

### MVP (60 points)

- Every requirement is met
- The **Architecture Diagram** to present your solution
- The solution must be 100% serverless! (e.g.: **API Gateway** + **AWS Lambda** + **Dynamodb**)
- It includes configuration files / scripts for deploying it on **AWS**
- The solution runs on our environment
- Tech Stack: **Node.js v18** (or highest) using **Typescript**
- Any ENV specific value should be configurable and documented
- Everything should work after following a simple README
- The code should be clear and easy to read / debug

### Nice moves (5 points each)

- It includes **Swagger** or **Postman** documentation
- It relies on **CDK v2** or **Serverless Framework** (Infrastructure as Code)
- It leverages AWS Serverless Services like AWS Cognito, API Gateway, Lambda DynamoDB, EventBridge, S3, SNS, SQS, etc.
- It's asynchronous
- It's fast (<~300ms after upload finishes)
- It includes some kind of testing (unit tests, integration tests, etc) with at least 70% coverage
- It has an auth implementation using **AWS Cognito**

### Wait, WHAT?! (10 points each)

- It includes a configuration file / script to setup a CI/CD process on AWS
- It includes three different kinds of tests (unit, integration and performance)
