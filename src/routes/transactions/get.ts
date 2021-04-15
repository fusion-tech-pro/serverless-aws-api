"use strict";
import { APIGatewayProxyEvent, APIGatewayEventRequestContext } from 'aws-lambda';
import { Client, Transaction } from '../../models';

exports.getOne = async (event: APIGatewayProxyEvent, context: APIGatewayEventRequestContext) => {
  try {
    if (!(event.pathParameters && event.pathParameters.id)) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: 'Id param is missing'
        })
      };
    };

    const clientAPIkey = event.headers["serverless-api-key"];
    const client = await Client.findOne({
      where: {
        APIkey: clientAPIkey
      }
    });

    if (client) {
      const transaction = await Transaction.findByPk(event.pathParameters.id);
      if (transaction) {
        return {
          statusCode: 201,
          body: JSON.stringify({
            transaction
          })
        };
      };
    };
  } catch (error) {
    console.error('Transaction get one error:', error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      body: JSON.stringify({
        message: error.message
      })
    };
  }
};
