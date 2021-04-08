"use strict";
import { APIGatewayProxyEvent, APIGatewayEventRequestContext } from 'aws-lambda';
import { Client } from '../../models';

exports.getOne = async (event: APIGatewayProxyEvent, context: APIGatewayEventRequestContext) => {
    try {
      if (!(event.pathParameters && event.pathParameters.id)) {
        return {
          statusCode: 400,
          body: JSON.stringify({
            message: 'Id param is missing'
          })
        };
      }

      const client = await Client.findByPk(event.pathParameters.id);
      return {
        statusCode: 201,
        body: JSON.stringify({
          client
        })
      };
    } catch (error) {
      console.error('Clients list error:', error);
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
