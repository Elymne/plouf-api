import handler from './handler';
import {string} from '../common';
import {user, userArray} from './validators';

const userRoutes = [
    {
        method: 'GET',
        path: '/users',
        options: {
            handler: handler.fetchUsers,
            description: 'Get Users',
            notes: 'Returns all Users',
            tags: ['api', 'user'],
            response: {
                status: {
                    200: userArray,
                    400: undefined,
                    404: undefined,
                    500: undefined
                }
            }
        }
    },
    {
        method: 'GET',
        path: '/users/{id}',
        options: {
            handler: handler.fetchUserById,
            description: 'Get User by id',
            notes: 'Returns User by id',
            tags: ['api', 'user'],
            validate: {
                params: string
            },
            response: {
                status: {
                    200: user,
                    400: undefined,
                    404: undefined,
                    500: undefined
                }
            }
        }
    },
    {
        method: 'POST',
        path: '/users',
        options: {
            handler: handler.createUser,
            description: 'Create User',
            notes: 'Creates a new User',
            tags: ['api', 'user'],
            validate: {
                payload: user
            },
            response: {
                status: {
                    201: undefined,
                    400: undefined,
                    409: undefined,
                    500: undefined
                }
            }
        }
    },
    {
        method: 'PATCH',
        path: '/users/{id}',
        options: {
            handler: handler.updateUser,
            description: 'Update User by id',
            notes: 'Updates a User by id',
            tags: ['api', 'user'],
            validate: {
                params: string,
                payload: user
            },
            response: {
                status: {
                    204: undefined,
                    400: undefined,
                    500: undefined
                }
            }
        }
    },
    {
        method: 'DELETE',
        path: '/users/{id}',
        options: {
            handler: handler.deleteUser,
            description: 'Delete User by id',
            notes: 'Deletes a User by id',
            tags: ['api', 'user'],
            validate: {
                params: string
            },
            response: {
                status: {
                    204: undefined,
                    400: undefined,
                    500: undefined
                }
            }
        }
    }
];

export default userRoutes;
