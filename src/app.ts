import bodyParser from 'body-parser';
import express from 'express';

import routes from 'routes/routes';

const app = express();

// support application/json type post data
app.use(bodyParser.json());
// support application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: false }));
// redirect http -> https
app.use((req, res, next) => {
  if (req.secure) {
    // request was via https, so do no special handling
    next();
  } else {
    // request was via http, so redirect to https
    res.redirect('https://' + req.headers.host + req.url);
  }
});

routes(app);

app.get('*', (req, res) => {
  res.status(404).send('Not Found');
});

export default app;
