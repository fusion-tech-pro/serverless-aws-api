"use strict";

import { APIGatewayEventRequestContext, APIGatewayProxyCallback, APIGatewayProxyEvent, APIGatewayProxyHandler } from 'aws-lambda';
import { Client } from '../models';


exports.post = async function (event: APIGatewayProxyEvent, context: APIGatewayEventRequestContext) {

  return {
    statusCode: 201,
    body: JSON.stringify({
      event
    })
  };
};
