import { STRING, UUID, UUIDV4 } from 'sequelize';
import { database } from '../../../core';

const GradeModel = database.define(
    'Grade',
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
        tableName: 'grade',
    },
);

export default GradeModel;
