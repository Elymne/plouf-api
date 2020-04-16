import Joi from '@hapi/joi';

const grade = Joi.object({
    id: Joi.number()
        .description('the grade id'),
    name: Joi
        .string()
        .max(255)
        .required()
        .description('the grade name')
}).label('Grade');

export default grade;
