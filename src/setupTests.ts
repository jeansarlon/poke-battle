import '@testing-library/jest-dom/extend-expect';
import DotEnv from 'dotenv';

DotEnv.config({ path: './configuration/envs/.env.test' });
global.ENVIRONMENT = process.env.NODE_ENV;

