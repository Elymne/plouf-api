import UserModel from './models';
import SubjectModel from '../subjects/models';

const fetchUsers = () => {
    return UserModel.findAll();
};

const fetchUserById = id => {
    return UserModel.findByPk(id);
};

const createUser = user => {
    return UserModel.create(user);
};

const updateUser = (id, user) => {
    const options = {where: {id}};
    return UserModel.update(user, options);
};

const deleteUser = id => {
    const options = {where: {id}};
    return UserModel.destroy(options);
};

export default {
    fetchUsers,
    fetchUserById,
    createUser,
    updateUser,
    deleteUser
};
