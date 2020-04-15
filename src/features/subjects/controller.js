import SubjectModel from './models';

const fetchSubjects = () => {
    return SubjectModel.findAll();
};

const fetchSubjectById = id => {
    return SubjectModel.findByPk(id);
};

const createSubject = data => {
    return SubjectModel.create(data);
};

const updateSubject = (id, data) => {
    const options = { where: { id } };
    return SubjectModel.update(data, options);
};

const deleteSubject = id => {
    const options = { where: { id } };
    return SubjectModel.destroy(options);
};

export default {
    fetchSubjects,
    fetchSubjectById,
    createSubject,
    updateSubject,
    deleteSubject,
};
