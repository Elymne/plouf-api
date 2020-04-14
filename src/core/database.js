import {Sequelize} from 'sequelize';
import {databaseConfig} from './config';

export const database = new Sequelize(databaseConfig);
