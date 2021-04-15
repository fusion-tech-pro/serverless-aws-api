'use strict';

import {
  APIGatewayEventRequestContext,
  APIGatewayProxyEvent,
} from 'aws-lambda';

import { Client, Transaction } from '../../models/'

import { sumRecords } from '../../utils/sumRecords';

exports.get = async (
  event: APIGatewayProxyEvent,
  context: APIGatewayEventRequestContext
) => {
  try {
    const query = event.queryStringParameters || {};
    const clientAPIkey = event.headers["serverless-api-key"];

    const client = await Client.findOne({
      where: {
        APIkey: clientAPIkey
      }
    });

    const summary = await sumRecords({
      model: Transaction,
      identifyField: "clientId",
      identifyValue: client?.id,
      sumField: "price",
      date: query.date
    });

    return {
      statusCode: 201,
      body: JSON.stringify({
        summary,
      }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
    };
  } catch (error) {
    console.error('Transaction list error:', error);
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
