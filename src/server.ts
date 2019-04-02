import fs from 'fs';
import http from 'http';
import https from 'https';

import app from './app';

const httpPORT = 80;
const httpsPORT = 443;

http.createServer(app).listen(httpPORT);
https
  .createServer(
    {
      cert: fs.readFileSync(`./certs/server.crt`),
      key: fs.readFileSync('./certs/server.key')
    },
    app
  )
  .listen(httpsPORT, () => {
    // tslint:disable-next-line: no-console
    console.log(`Express server listening on port ${httpsPORT}`);
  });
