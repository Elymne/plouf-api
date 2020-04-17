import {STRING, INTEGER} from 'sequelize';
import {database} from '../../../core';
import SubjectModel from './../../subjects/models';

const UserModel = database.define(
    'User',
    {
        id: {
            type: STRING,
            allowNull: false,
            primaryKey: true
        },
        firstname: {
            type: STRING,
            allowNull: false
        },
        name: {
            type: STRING,
            allowNull: false
        }
    },
    {
        tableName: 'user',
        timestamps: false
    }
);

// ManyToMany : UserModel and SubjectModel.
UserModel.belongsToMany(SubjectModel, {
    through: 'Preference',
    foreignKey: 'idUser'
});
SubjectModel.belongsToMany(UserModel, {
    through: 'Preference',
    foreignKey: 'idSubject'
});

export default UserModel;
