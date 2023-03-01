import { Pool } from 'pg';
import config from './index';

const credentials = {
  user: config.pguser,
  host: config.pghost,
  database: config.pgdatabase,
  password: config.pgpassword,
  port: Number(config.pgport)
};

const client = new Pool(credentials);

export { client };
