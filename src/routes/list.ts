"use strict";

import { APIGatewayEventRequestContext, APIGatewayProxyEvent, APIGatewayProxyHandler } from "aws-lambda";

let db = require('./config/db.js');

exports.list = async (event: APIGatewayProxyEvent, context: APIGatewayEventRequestContext, callback) => {
    
};
