import Joi from '@hapi/joi';
import JoiDate from '@hapi/joi-date';

Joi.extend(JoiDate);

const subject = Joi.object({
    id: Joi.string().uuid().description('the data id'),
    name: Joi.string().max(255).required().description('the data name'),
}).label('Data');

export default subject;
