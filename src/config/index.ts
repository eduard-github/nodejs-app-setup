import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

interface Config {
  port: string;
  pguser: string;
  pghost: string;
  pgdatabase: string;
  pgpassword: string;
  pgport: string;
}

const config: Config = {
  port: process.env.PORT as string,
  pguser: process.env.PGUSER as string,
  pghost: process.env.PGHOST as string,
  pgdatabase: process.env.PGDATABASE as string,
  pgpassword: process.env.PGPASSWORD as string,
  pgport: process.env.PGPORT as string
};

export default config;
