import Joi from '@hapi/joi';
import JoiDate from '@hapi/joi-date';

Joi.extend(JoiDate);

const subject = Joi.object({
    id: Joi.string().uuid().description('the subject id'),
    name: Joi.string().max(255).required().description('the subject name'),
    createdAt: Joi.date().description('created date'),
    updatedAt: Joi.date().description('updated date'),
}).label('Subject');

export default subject;
