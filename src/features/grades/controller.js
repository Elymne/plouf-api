import {GradeModel, UserGradeModel} from './models';

const fetchGrades = () => {
    return GradeModel.findAll();
};

const fetchGradeById = id => {
    return GradeModel.findByPk(id);
};

const createGrade = grade => {
    return GradeModel.create(grade);
};

const updateGrade = (id, grade) => {
    const options = {where: {id}};
    return GradeModel.update(grade, options);
};

const deleteGrade = id => {
    const options = {where: {id}};
    return GradeModel.destroy(options);
};

const fetchUserGrades = () => {
    return UserGradeModel.findAll();
};

const createUserGrade = userGrade => {
    return UserGradeModel.create(userGrade);
};

const deleteUserGrade = id => {
    const options = {where: {id}};
    return UserGradeModel.destroy(options);
};

export default {
    fetchGrades,
    fetchGradeById,
    createGrade,
    updateGrade,
    deleteGrade,

    fetchUserGrades,
    createUserGrade,
    deleteUserGrade
};
