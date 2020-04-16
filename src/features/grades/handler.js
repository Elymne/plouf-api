import {notFound} from '@hapi/boom';
import controller from './controller';

const fetchGrades = (_, h) => {
    return controller
        .fetchGrades()
        .then(grades => h.response(grades).code(200))
        .catch(() => notFound('No data found'));
};

const fetchGradeById = (req, h) => {
    const {id} = req.params;
    return controller
        .fetchGradeById(id)
        .then(grade => h.response(grade).code(200))
        .catch(() => notFound('No data found'));
};

const createGrade = (req, h) => {
    const {payload} = req;
    return controller
        .createGrade(payload)
        .then(() => h.response().code(201))
        .catch(() => notFound('No data found'));
};

const updateGrade = (req, h) => {
    const {id} = req.params;
    const {payload} = req;
    return controller
        .updateGrade(id, payload)
        .then(() => h.response().code(204));
};

const deleteGrade = (req, h) => {
    const {id} = req.params;
    return controller.deleteGrade(id).then(() => h.response().code(204));
};

const createUserGrade = (req, h) => {
    const {payload} = req;
    return controller
        .createUserGrade(payload)
        .then(() => h.response().code(201))
        .catch(() => notFound('No mdr found'));
};

export default {
    fetchGrades,
    fetchGradeById,
    createGrade,
    updateGrade,
    deleteGrade,
    createUserGrade
};
