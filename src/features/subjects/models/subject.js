import { STRING, UUID, UUIDV4 } from 'sequelize';
import { database } from '../../../core';

const SubjectModel = database.define(
    'Subject',
    {
        id: {
            type: UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'subject',
    },
);

export default SubjectModel;
