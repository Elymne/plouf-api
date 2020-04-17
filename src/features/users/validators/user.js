import Joi from '@hapi/joi';
import subject from '../../subjects/validators';

const user = Joi.object({
    id: Joi.string().description('the user id'),
    firstname: Joi.string()
        .max(255)
        .required()
        .description('the user firstname'),
    name: Joi.string().max(255).required().description('the user name')
}).label('User');

export default user;
