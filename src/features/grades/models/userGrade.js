import {STRING, UUID, UUIDV4, INTEGER} from 'sequelize';
import {database} from '../../../core';
import GradeModel from './grade';

const UserGradeModel = database.define(
    'UserGrade',
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
        idGrade: {
            type: INTEGER,
            allowNull: false
        }
    },
    {
        tableName: 'user_grade',
        timestamps: false
    }
);

UserGradeModel.belongsTo(GradeModel, {
    foreignKey: {name: 'idGrade', allowNull: false}
});
GradeModel.hasMany(UserGradeModel, {foreignKey: {name: 'idGrade'}});

export default UserGradeModel;
