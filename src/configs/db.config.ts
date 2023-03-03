import { Pool } from 'pg';
import env from './env.config';

const credentials = {
  user: env.pguser,
  host: env.pghost,
  database: env.pgdatabase,
  password: env.pgpassword,
  port: Number(env.pgport)
};

const client = new Pool(credentials);

export { client };
