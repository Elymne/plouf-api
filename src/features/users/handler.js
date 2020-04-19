import {notFound} from '@hapi/boom';
import controller from './controller';

const fetchUsers = (req, h) => {
    return controller
        .fetchUsers()
        .then(users => h.response(users).code(200))
        .catch(() => notFound('No data found'));
};

const fetchUserById = (req, h) => {
    const {id} = req.params;
    return controller
        .fetchUserById(id)
        .then(user => h.response(user).code(200))
        .catch(() => notFound('No dataf found'));
};

const createUser = (req, h) => {
    const {payload} = req;
    return controller
        .createUser(payload)
        .then(() => h.response().code(201))
        .catch(() => notFound('No data found'));
};

const updateUser = (req, h) => {
    const {id} = req.params;
    const {payload} = req;
    return controller
        .updateUser(id, payload)
        .then(() => h.response().code(204));
};

const deleteUser = (req, h) => {
    const {id} = req.params;
    return controller.deleteUser(id).then(() => h.response().code(204));
};

export default {
    fetchUsers,
    fetchUserById,
    createUser,
    updateUser,
    deleteUser
};
