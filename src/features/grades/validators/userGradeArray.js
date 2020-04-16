import Joi from '@hapi/joi';
import userGrade from './userGrade';

const userGradeArray = Joi.array().items(userGrade).label('Array of userGrade');

export default userGradeArray;
