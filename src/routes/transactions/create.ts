'use strict';
import {
  APIGatewayEventRequestContext,
  APIGatewayProxyEvent,
} from 'aws-lambda';
import { Transaction } from '../../models';

exports.post = async function (
  event: APIGatewayProxyEvent,
  context: APIGatewayEventRequestContext
) {
  return {
    statusCode: 201,
    body: JSON.stringify({
      message: 'OK',
    }),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  };
};
