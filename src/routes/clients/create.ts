'use strict';
import {
  APIGatewayEventRequestContext,
  APIGatewayProxyEvent,
} from 'aws-lambda';
import { Client } from '../../models';
import crypto from 'crypto';

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
    payload.APIkey = crypto.randomBytes(16).toString("hex");

    const client = await Client.create(payload);

    return {
      statusCode: 201,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },

      body: JSON.stringify({
        message: 'User created',
        client
      }),
    };
  } catch (error) {
    console.error('Client create error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: error.message,
      }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };
  }
};
