"use strict";

import { APIGatewayEventRequestContext, APIGatewayProxyEvent, APIGatewayProxyHandler } from "aws-lambda";
import { Client } from '../models';

exports.get = async (event: APIGatewayProxyEvent, context: APIGatewayEventRequestContext) => {
    try {
      const clients = await Client.findAll();
      return {
        statusCode: 201,
        body: JSON.stringify({
          clients
        })
      };
    } catch (error) {
      console.error('Clients list error:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: error.message
        })
      };
    }
};
