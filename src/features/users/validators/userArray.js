import Joi from '@hapi/joi';
import user from './user';

const userArray = Joi.array().items(user).label('Array of users');

export default userArray;
