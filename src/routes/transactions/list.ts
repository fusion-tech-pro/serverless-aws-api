'use strict';

import {
  APIGatewayEventRequestContext,
  APIGatewayProxyEvent,
} from 'aws-lambda';

import { Transaction } from '../../models';
import { createFilter } from '../../utils/createFilter';
import { verifyUser } from '../../utils/verifyUser';

exports.get = async (
  event: APIGatewayProxyEvent,
  context: APIGatewayEventRequestContext
) => {
  try {
    const query = event.queryStringParameters || {};
    const clientAPIkey = event.headers["pledge-api-key"];

    const user = await verifyUser(clientAPIkey);

    const options = createFilter({ ...query, clientId: user.id });

    const data = await Transaction.findAndCountAll(options);
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
