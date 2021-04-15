# Serverless services with lambda application and Api Gateway
Serverless framework + sequelize + rds(PostgreSQL) + Lambda application

## Install
Just install dependencies by:
```bash
npm i
```
Install cli dependencies by:
```bash
npm i -g serverless & npm i -g sequelize-cli
```

## Development & Deployment
1) Upload All Lambda functions on AWS by:
```bash
npm run deploy
```
2) Build js from typescript by:
```bash
npm run build
```
3) Initialize database models by:
```bash
npm run migrate
```
4) Upload exact Lambda function on AWS by:
```bash
npm run df <function_name_from_serverless_yml>
```