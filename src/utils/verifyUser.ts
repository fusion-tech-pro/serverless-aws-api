import { Client } from '../models/index';

export const verifyUser = async (publicApiKey: string | undefined) => {
  let client;

  if (publicApiKey) {
    client = await Client.findOne({
      where: {
        APIkey: publicApiKey
      }
    })
  };

  if (!client) {
    throw new Error('Wrong user paramentrs')
  };

  return client;
}