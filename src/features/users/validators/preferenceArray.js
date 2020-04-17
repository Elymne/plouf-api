import Joi from '@hapi/joi';
import preference from './preference';

const preferenceArray = Joi.array()
    .items(preference)
    .label('Array of preference');

export default preferenceArray;
