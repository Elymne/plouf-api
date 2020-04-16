import Joi from '@hapi/joi';
import subject from './subject';

const subjectArray = Joi.array().items(subject).label('Array of subjects');

export default subjectArray;
