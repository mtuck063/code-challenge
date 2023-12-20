# Thumbnail Generator API

Utilize this API to transform one image into 3 thumbnail images with a resolution size of: 400x300, 160x120, 120x120.

```shell
curl --location 'https://ishhcq34w2.execute-api.us-east-1.amazonaws.com/Prod/upload' --form 'img=@"/Users/johndoe/foo.png"'
```

Replace `/Users/johndoe/foo.png` with a valid PNG or JPG image file.

Or import the [postman collection](./thumbnail.postman_collection.json), consisting of one post request `/upload`.

## Getting Started

### Requirements

You must have an AWS account. As well as [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) installed, with the following credentials configured:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

In order to deploy, the user or agent must have the following permissions:

- `AmazonAPIGatewayAdministrator`
- `AmazonS3FullAccess`
- `AWSCloudFormationFullAccess`
- `AWSLambda_FullAccess`
- `IAMFullAccess`

You also need to install:

- nodejs 18 (`nvm install lts/hydrogen`)
- Docker Desktop
- [SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html#install-sam-cli-instructions)

### Install Dependencies

```shell
yarn install
```

## Development

Now after installation, you can go ahead and run `nx run api:serve` which should:

- Invoke `sam build` which builds your artifacts and copies them to `.aws-sam`
- Start `sam local start-api` a web server hosted on `localhost:3000` to test the app

## Deployment

**Note**: Before attempting to deploy you must have completed the prequistes for using AWS services such as:

- Creating an AWS Account
- Provisioning an admin user with all of the required aws policies
- Creating Access keys

### Infrastructure as Code

AWS Cloudformation is used to configure all infrastructure required to run the API.

To deploy you run

```shell
nx run api:deploy --parameter-overrides=ThumbnailBucketName=unique-bucket-name-change-me
```

### Setup S3 Bucket

During your first deployment you should run

```shell
nx run api:deploy --guided
```

In order to set your parameter/env var `ThumbnailBucketName`.

A new S3 bucket can be created with bucket name set above, if the bucket doesn't already exist.

```shell
nx run api:deploy-s3 --parameter-overrides=ThumbnailBucketName=unique-bucket-name-change-me
```

### Architecture Diagram

![Architecture Diagram](./architecture-diagram.png 'Architecture Diagram')
