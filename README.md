# Serverless services with lambda application and Api Gateway
Serverless framework + sequelize + rds(PostgreSQL) + Lambda application

## Install
Just install dependencies by:
```bash
npm i
```
Just install cli dependencies by:
```bash
npm i -g serverless & npm i -g sequelize-cli
```

## Development & Deployment
1) Upload All Lambda functions on AWS by:
```bash
npm deploy
```
2) Build js from typescript by:
```bash
npm build
```
3) Initialize database models by:
```bash
npm migrate
```
4) Upload exact Lambda function on AWS by:
```bash
npm df <function_name_from_serverless_yml>
```