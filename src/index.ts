import http from 'http';
import app from './app';
import env from './configs/env.config';

const hostname = '127.0.0.1';
const port = +env.port ?? 5000;

const server = http.createServer(app);

const bootstrap = (): void => {
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
};

bootstrap();
