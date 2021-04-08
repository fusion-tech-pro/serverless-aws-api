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
  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Empty body',
      }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };
  }

  try {
    const payload = JSON.parse(event.body);
    const transaction = await Transaction.create(payload);

    return {
      statusCode: 201,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        message: 'Transaction created',
        transaction
      }),
    };
  } catch (error) {
    console.error('Transaction create error:', error);
    return {
      statusCode: 201,
      body: JSON.stringify({
        message: error.message,
      }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
    };
  }
};
