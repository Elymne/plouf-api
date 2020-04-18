import SubjectModel from './models';

const fetchSubjects = () => {
    return SubjectModel.findAll();
};

const fetchSubjectById = id => {
    return SubjectModel.findByPk(id);
};

const createSubject = subject => {
    return SubjectModel.create(subject);
};

const updateSubject = (id, subject) => {
    const options = {where: {id}};
    return SubjectModel.update(subject, options);
};

const deleteSubject = id => {
    const options = {where: {id}};
    return SubjectModel.destroy(options);
};

export default {
    fetchSubjects,
    fetchSubjectById,
    createSubject,
    updateSubject,
    deleteSubject
};
