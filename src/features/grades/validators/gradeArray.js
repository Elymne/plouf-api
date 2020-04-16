import Joi from '@hapi/joi';
import grade from './grade';

const gradeArray = Joi.array().items(grade).label('Array of grades');

export default gradeArray;
