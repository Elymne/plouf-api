import { notFound } from '@hapi/boom';
import controller from './controller';

const fetchSubjects = (req, h) => {
    return controller
        .fetchSubjects()
        .then(subjects => h.response(subjects).code(200))
        .catch(() => notFound('No data found'));
};

const fetchSubjectById = (req, h) => {
    const { id } = req.params;
    return controller
        .fetchSubjectById(id)
        .then(subject => h.response(subjects).code(200))
        .catch(() => notFound('No data found'));
};

const createSubject = (req, h) => {
    const { payload } = req;
    return controller
        .createSubject(payload)
        .then(() => h.response().code(201))
        .catch(() => notFound('No data found'));
};

const updateSubject = (req, h) => {
    const { id } = req.params;
    const { payload } = req;
    return controller
        .updateSubject(id, payload)
        .then(() => h.response().code(204));
};

const deleteSubject = (req, h) => {
    const { id } = req.params;
    return controller.deleteSubject(id).then(() => h.response().code(204));
};

export default {
    fetchSubjects,
    fetchSubjectById,
    createSubject,
    updateSubject,
    deleteSubject,
};
