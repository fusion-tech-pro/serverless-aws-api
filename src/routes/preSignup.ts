"use strict";

import { APIGatewayEventRequestContext, APIGatewayProxyEvent, APIGatewayProxyHandler } from "aws-lambda";
import { Client } from '../models';

exports.check = async (event: APIGatewayProxyEvent, context: APIGatewayEventRequestContext) => {
    try {
    //   const clients = await Client.findOne()
    console.log('Event sing up', event);
    
      return {
        statusCode: 201,
        body: JSON.stringify({
          event
        })
      };
    } catch (error) {
      console.error('PreSignUp error:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: error.message
        })
      };
    }
};
