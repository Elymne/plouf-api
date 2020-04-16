import {INTEGER, STRING} from 'sequelize';
import { database } from '../../../core';

const SubjectModel = database.define(
    'Subject',
    {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'subject',
        timestamps: false
    },
);

export default SubjectModel;
