import PreferenceModel from './models';

const fetchPreferences = () => {
    return PreferenceModel.findAll();
};

const fetchPreferenceById = id => {
    return PreferenceModel.findByPk(id);
};

const fetchPreferencesByUserId = id => {
    const options = {where: {idUser: id}};
    return PreferenceModel.findAll(options);
};

const fetchPreferencesBySubjectGrade = (subjectId, gradeId) => {
    const options = {where: {idSubject: subjectId, idGrade: gradeId}};
    return PreferenceModel.findAll(options);
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
    fetchPreferencesByUserId,
    fetchPreferencesBySubjectGrade,
    createPreference,
    updatePreference,
    deletePreference
};
