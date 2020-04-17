import Joi from '@hapi/joi';

const string = Joi.object({
    id: Joi.string().description('the string')
}).label('STRING');

export default string;
