"use strict";

import { APIGatewayEventRequestContext, APIGatewayProxyEvent, APIGatewayProxyHandler } from "aws-lambda";
import { Client } from '../models';
import { createFilter } from '../utils';

exports.get = async (event: APIGatewayProxyEvent, context: APIGatewayEventRequestContext) => {
    try {
      const query = event.queryStringParameters || {};

      const options = createFilter(query);

      const data = await Client.findAndCountAll(options);
      return {
        statusCode: 201,
        body: JSON.stringify({
          data: data.rows,
          total: data.count,
          pages: Math.ceil(data.count / options.limit)
        }),
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
      };
    } catch (error) {
      console.error('Clients list error:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: error.message
        }),
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
      };
    }
};
