import Joi from '@hapi/joi';

const user = Joi.object({
    id: Joi.string().description('the user id'),
    firstname: Joi.string()
        .max(255)
        .required()
        .description('the user firstname'),
    name: Joi.string().max(255).required().description('the user name'),
    idGrade: Joi.number().description('the grade id')
}).label('Grade');

export default user;
