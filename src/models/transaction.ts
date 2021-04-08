import {
  Model,
  DataTypes,
  BuildOptions,
  Sequelize
} from 'sequelize';

type TransactionAttributes = {
  id?: number;
  referenceNumber: number,
  price: number,
  currency: string,
  createdAt?: Date;
  updatedAt?: Date;
}

interface TransactionModel extends Model<TransactionAttributes>, TransactionAttributes {}

type TransactionStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): TransactionModel;
}

export const ClientFactory = function (sequelize: Sequelize): TransactionStatic {
  return <TransactionStatic>sequelize.define('transaction', {
    id: {
      primaryKey: true,
      type: DataTypes.NUMBER,
      autoIncrement: true,
    },
    referenceNumber: DataTypes.NUMBER,
    price: DataTypes.NUMBER,
    currency: DataTypes.STRING
  });
};