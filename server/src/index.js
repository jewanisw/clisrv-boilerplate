import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import config from './config';

// import routes
import demoRoutes from './routes/Demo.routes';

mongoose.Promise = global.Promise;
const connect = mongoose.connect(config.mongoURI);

connect
  .catch((err) => {
    console.error('could not connect to mongo');
    throw err;
  });

const app = express();

app.server = http.createServer(app);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: '50mb'}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', config.app);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token');
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  if (req.method.toLowerCase() === 'options') {
    return res.status(200).end();
  }
  return next();
});

app.use('/demo', demoRoutes);

app.server.listen(config.port, (error) => {
  if (!error) {
    console.info(`server started on port ${config.port}`);
  }
});
