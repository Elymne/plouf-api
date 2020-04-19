import Joi from '@hapi/joi';

const preference = Joi.object({
    id: Joi.string().uuid().description('the subject id'),
    idUser: Joi.string().required().description('the user firstname'),
    idSubject: Joi.number().integer().required().description('the user name'),
    idGrade: Joi.number().integer().description('the grade id')
}).label('Grade');

export default preference;
