import Joi from '@hapi/joi';

const uuid = Joi.object({
    id: Joi.string().uuid().description('the uuid'),
}).label('UUID');

export default uuid;
