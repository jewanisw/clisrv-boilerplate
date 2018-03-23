import dotenv from 'dotenv';

dotenv.config();

export default {
  port: 3001,
  app: process.env.APP_URL || 'http://localhost:3000',
  server: process.env.SERVER_URL || 'http://localhost:3001',
  mongoURI: 'mongodb://mongo:27017/clisrv-boilerplate', // TODO replace clisrv-boilerplate with appropriate name
};
