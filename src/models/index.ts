import * as sequelize from "sequelize";

import db from "../db/db";
import { ClientFactory } from "./client";
import { TransactionFactory } from "./transaction";

export const Client = ClientFactory(db.sequelize);
export const Transaction = TransactionFactory(db.sequelize);
