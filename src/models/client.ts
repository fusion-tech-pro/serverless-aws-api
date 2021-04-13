import {
  Model,
  DataTypes,
  BuildOptions,
  Sequelize
} from 'sequelize';

type ClientAttributes = {
  id: number;
  name: string;
  address: string;
  admin_email?: string;
  APIkey: string;
  domain: string;
}

interface ClientModel extends Model<ClientAttributes>, ClientAttributes { }

type ClientStatic = typeof Model & {
  new(values?: object, options?: BuildOptions): ClientModel;
}

export const ClientFactory = function (sequelize: Sequelize): ClientStatic {
  return <ClientStatic>sequelize.define('client', {
    id: {
      primaryKey: true,
      type: DataTypes.NUMBER,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    admin_email: DataTypes.STRING,
    APIkey: DataTypes.STRING,
    domain: DataTypes.STRING,
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