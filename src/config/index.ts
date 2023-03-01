import * as dotenv from 'dotenv';
dotenv.config({ path: 'config/.env' });

interface Config {
  port: string;
}

const config: Config = {
  port: process.env.PORT as string
};

export default config;
