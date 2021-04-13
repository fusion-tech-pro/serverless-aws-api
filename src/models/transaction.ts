import {
  Model,
  DataTypes,
  BuildOptions,
  Sequelize
} from 'sequelize';

type TransactionAttributes = {
  id: number;
  referenceNumber: number,
  price: number,
  clientId: number,
  currency: string,
}

interface TransactionModel extends Model<TransactionAttributes>, TransactionAttributes { }

type TransactionStatic = typeof Model & {
  new(values?: object, options?: BuildOptions): TransactionModel;
}

export const TransactionFactory = function (sequelize: Sequelize): TransactionStatic {
  return <TransactionStatic>sequelize.define('transaction', {
    id: {
      primaryKey: true,
      type: DataTypes.NUMBER,
      autoIncrement: true,
    },
    referenceNumber: DataTypes.NUMBER,
    price: DataTypes.NUMBER,
    currency: DataTypes.STRING,
    clientId: DataTypes.NUMBER,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  });
};