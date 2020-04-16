import Joi from '@hapi/joi';

const userGrade = Joi.object({
    id: Joi.string().uuid().description('the userGrade id'),
    idUser: Joi.string().max(255).required().description('the user id'),
    idGrade: Joi.number().description('the grade id')
}).label('UserGrade');

export default userGrade;
