import { APIGatewayProxyResult } from 'aws-lambda';

export function errorMessage(
  message: string,
  error?: Error
): APIGatewayProxyResult {
  console.error(message, error);
  return {
    statusCode: 400,
    body: JSON.stringify({ message }),
  };
}
