import Joi from '@hapi/joi';

const preference = Joi.object({
    idUser: Joi.string().max(255).required().description('the user firstname'),
    idSubject: Joi.string().max(255).required().description('the user name'),
    idGrade: Joi.number().integer().description('the grade id')
}).label('Grade');

export default preference;
