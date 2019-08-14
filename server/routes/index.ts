import Express from 'express';

const app = Express();

module.exports = {path: '/api', handler: app};

app.get('/hello', (req: Express.Request, res: Express.Response) => {

  res.json({
    message: "Hello,world!"
  });
});


