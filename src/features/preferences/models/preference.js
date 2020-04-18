import {database} from '../../../core';
import {UUID, UUIDV4, STRING, INTEGER} from 'sequelize';

import GradeModel from '../../grades/models';

const PreferenceModel = database.define(
    'Preference',
    {
        id: {
            type: UUID,
            defaultValue: UUIDV4,
            primaryKey: true
        },
        idUser: {
            type: STRING,
            allowNull: false
        },
        idSubject: {
            type: STRING,
            allowNull: false
        },
        idGrade: {
            type: INTEGER,
            allowNull: true
        }
    },
    {
        tableName: 'preference',
        timestamps: false
    }
);

GradeModel.hasMany(PreferenceModel, {foreignKey: {name: 'idGrade'}});
PreferenceModel.belongsTo(GradeModel, {
    foreignKey: {name: 'idGrade', allowNull: true}
});

export default PreferenceModel;
