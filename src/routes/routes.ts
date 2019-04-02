import { Application } from 'express';

export default (app: Application) => {
  app.route('/').get((req, res) => {
    res.status(200).send({
      message: 'GET request successful!!!!'
    });
  });

  // Contact
  app.route('/test').get((req, res) => {
    res.json({ test: 'test' });
  });
};
