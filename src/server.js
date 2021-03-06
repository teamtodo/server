import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';

import dynamoose from './middlewares/dynamoose';
import router from './routes';

dotenv.config();

const server = express();

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

dynamoose.ddb();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(router);

server.listen(port, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

export default server;
