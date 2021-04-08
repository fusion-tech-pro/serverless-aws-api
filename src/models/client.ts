import {
  Model,
  DataTypes,
  BuildOptions,
  Sequelize
} from 'sequelize';

type ClientAttributes = {
  id?: number;
  name: string;
  address: string;
  contact_number?: string;
  admin_email?: string;
  domain: string;
  age?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ClientModel extends Model<ClientAttributes>, ClientAttributes {}

type ClientStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ClientModel;
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
    contact_number: DataTypes.STRING,
    admin_email: DataTypes.STRING,
    domain: DataTypes.STRING,
    age: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
};