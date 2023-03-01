import http from 'http';
import app from './app';
import config from './config';

const hostname = '127.0.0.1';
const port = +config.port ?? 5000;

const server = http.createServer(app);

const bootstrap = (): void => {
  try {
    console.log('DB Connected');
  } catch (error) {
    console.log('DB Connect error');
  }
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
};

bootstrap();
