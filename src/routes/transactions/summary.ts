'use strict';

import {
  APIGatewayEventRequestContext,
  APIGatewayProxyEvent,
} from 'aws-lambda';

import { Transaction } from '../../models/'

import { sumRecords } from '../../utils/sumRecords';
import { verifyUser } from '../../utils/verifyUser';

exports.get = async (
  event: APIGatewayProxyEvent,
  context: APIGatewayEventRequestContext
) => {
  try {
    const query = event.queryStringParameters || {};
    const clientAPIkey = event.headers["pledge-api-key"];

    const user = await verifyUser(clientAPIkey);
    console.log("query >> ", query)
    const summary = await sumRecords({
      model: Transaction,
      identifyField: "clientId",
      identifyValue: user.id,
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
