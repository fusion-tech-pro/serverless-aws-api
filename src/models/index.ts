import db from "../db/db";
import { ClientFactory } from "./client";
import { TransactionFactory } from "./transaction";

const Client = ClientFactory(db.sequelize);
const Transaction = TransactionFactory(db.sequelize);

Client.hasMany(Transaction, {
  foreignKey: 'clientId',
});
Transaction.belongsTo(Client);

export {
  Client,
  Transaction
}