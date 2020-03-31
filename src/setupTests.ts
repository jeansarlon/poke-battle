import '@testing-library/jest-dom/extend-expect';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv';

DotEnv.config({ path: './configuration/envs/.env.test' });

configure({ adapter: new Adapter() });

global.ENVIRONMENT = process.env.NODE_ENV;

