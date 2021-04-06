import Sequelize from 'sequelize';

const db_mode = process.env.NODE_ENV as DbModeType || 'development';
import envConfig from './env';

const env = envConfig[db_mode];

const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    port: env.port,
    logging: true, // Disable the logging. It is consuming the time on lambda function.
    dialect: env.dialect,
    define: {
        timestamps: false
    },
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 20000,
        idle: 10000
    }
});

export default {
    Sequelize: Sequelize,
    sequelize: sequelize
};

type DbModeType = 'development' | 'production'