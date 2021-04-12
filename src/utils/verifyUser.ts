import { Client } from '../models/index';
import { Op } from "sequelize";

export const verifyUser = async (clientId: string | undefined, publicApiKey: string | undefined) => {
  let client;

  if (clientId && publicApiKey) {
    client = await Client.findOne({
      where: {
        id: {
          [Op.eq]: +clientId
        },
        APIkey: {
          [Op.eq]: publicApiKey
        }
      }
    })
  };

  if (!client) {
    throw new Error('Wrong paramentrs')
  };
}