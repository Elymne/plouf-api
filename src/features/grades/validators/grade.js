import Joi from '@hapi/joi';
import JoiDate from '@hapi/joi-date';

Joi.extend(JoiDate);

const grade = Joi.object({
    id: Joi.string().uuid().description('the grade id'),
    name: Joi.string().max(255).required().description('the grade name'),
    createdAt: Joi.date().description('created date'),
    updatedAt: Joi.date().description('updated date'),
}).label('Grade');

export default grade;
