import PreferenceModel from './models';

const fetchPreferences = () => {
    return PreferenceModel.findAll();
};

const fetchPreferenceById = id => {
    return PreferenceModel.findByPk(id);
};

const createPreference = preference => {
    return PreferenceModel.create(preference);
};

const updatePreference = (id, preference) => {
    const options = {where: {id}};
    return PreferenceModel.update(preference, options);
};

const deletePreference = id => {
    const options = {where: {id}};
    return PreferenceModel.destroy(options);
};

export default {
    fetchPreferences,
    fetchPreferenceById,
    createPreference,
    updatePreference,
    deletePreference
};
