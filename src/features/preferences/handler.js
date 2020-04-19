import {notFound} from '@hapi/boom';
import controller from './controller';

const fetchPreferences = (req, h) => {
    return controller
        .fetchPreferences()
        .then(preferences => h.response(preferences).code(200))
        .catch(() => notFound('No data found'));
};

const fetchPreferenceById = (req, h) => {
    const {id} = req.params;
    return controller
        .fetchPreferenceById(id)
        .then(preference => h.response(preference).code(200))
        .catch(() => notFound('No data found'));
};

const fetchPreferencesByIdUser = (req, h) => {
    const {id} = req.params;
    return controller
        .fetchPreferenceByUserId(id)
        .then(preferences => h.response(preferences).code(200))
        .catch(() => notFound('No data found'));
};

const createPreference = (req, h) => {
    const {payload} = req;
    return controller
        .createPreference(payload)
        .then(() => h.response().code(201))
        .catch(() => notFound('No data found'));
};

const updatePreference = (req, h) => {
    const {id} = req.params;
    const {payload} = req;
    return controller
        .updatePreference(id, payload)
        .then(() => h.response().code(204));
};

const deletePreference = (req, h) => {
    const {id} = req.params;
    return controller.deletePreference(id).then(() => h.response().code(204));
};

export default {
    fetchPreferences,
    fetchPreferenceById,
    fetchPreferencesByIdUser,
    createPreference,
    updatePreference,
    deletePreference
};
