import SubjectModel from './models';

const fetchSubjects = () => {
    return SubjectModel.findAll();
};

const fetchSubjectById = id => {
    return SubjectModel.findByPk(id);
};

const createSubject = subjects => {
    return SubjectModel.create(subjects);
};

const updateSubject = (id, subjects) => {
    const options = { where: { id } };
    return SubjectModel.update(subjects, options);
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
