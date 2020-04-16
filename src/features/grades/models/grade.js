import {INTEGER, STRING} from 'sequelize';
import { database } from '../../../core';

const GradeModel = database.define(
    'Grade',
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
        tableName: 'grade',
        timestamps: false
    },
);

export default GradeModel;
