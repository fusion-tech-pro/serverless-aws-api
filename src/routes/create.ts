"use strict";

import { APIGatewayEventRequestContext, APIGatewayProxyCallback, APIGatewayProxyEvent, APIGatewayProxyHandler } from 'aws-lambda';
import { Client } from '../models';


exports.post = async function (event: APIGatewayProxyEvent, context: APIGatewayEventRequestContext) {
  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Empty body'
      })
    }
  }


  const payload = JSON.parse(event.body);

  payload.domain = payload.admin_email.split('@')[1];
  
  try {
    await Client.create(payload);

    return {
      statusCode: 201,
      headers: {
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
      body: JSON.stringify({
        message: 'User created'
      })
    };
  } catch (error) {
    console.error('Client create error:', error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
      body: JSON.stringify({
        message: error.message
      })
    };
  }
};
