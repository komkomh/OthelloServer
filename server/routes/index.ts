import Express from 'express';
import { Client, Ban, GameStatus } from '../models/models';

var bans:Ban[] = require('../models/models.ts');

const app = Express();

module.exports = {path: '/api', handler: app};

app.get('/hello', (req: Express.Request, res: Express.Response) => {

  res.json({
    message: "Hello,world!"
  });
});


