import Joi from '@hapi/joi';

const subject = Joi.object({
    id: Joi.number()
        .description('the subject id'),
    name: Joi
        .string()
        .max(255)
        .required()
        .description('the subject name')
}).label('Subject');

export default subject;
