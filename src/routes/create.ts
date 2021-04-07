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
  try {
    await Client.create(payload);
  
    return {
      statusCode: 201,
      body: JSON.stringify({
        event
      })
    };
  } catch (error) {
    console.error('Client create error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: error.message
      })
    };
  }
};
