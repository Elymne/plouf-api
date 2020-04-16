import Joi from '@hapi/joi';

const integer = Joi.object({
    id: Joi.number().integer().description('the integer')
}).label('INTEGER');

export default integer;
