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

const createUserGrade = userGrade => {
    return UserGradeModel.create(userGrade);
};

export default {
    fetchGrades,
    fetchGradeById,
    createGrade,
    updateGrade,
    deleteGrade,
    createUserGrade
};
