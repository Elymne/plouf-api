import GradeModel from './models';

const fetchGrades = () => {
    return GradeModel.findAll();
};

const fetchGradeById = id => {
    return GradeModel.findByPk(id);
};

const createGrade = data => {
    return GradeModel.create(data);
};

const updateGrade = (id, data) => {
    const options = { where: { id } };
    return GradeModel.update(data, options);
};

const deleteGrade = id => {
    const options = { where: { id } };
    return GradeModel.destroy(options);
};

export default {
    fetchGrades,
    fetchGradeById,
    createGrade,
    updateGrade,
    deleteGrade,
};
