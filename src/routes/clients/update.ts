"use strict";

exports.put = async (event: any, context: any) => {
  return {
    statusCode: 201,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    
    body: JSON.stringify({
      message: 'User updated'
    }),
  };
};
