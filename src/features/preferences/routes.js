import handler from './handler';
import {string, uuid, integer} from '../common';
import {preference, preferenceArray} from './validators';

const preferencesRoutes = [
    {
        method: 'GET',
        path: '/preferences',
        options: {
            handler: handler.fetchPreferences,
            description: 'Get preferences',
            notes: 'Returns all preferences',
            tags: ['api', 'preference'],
            response: {
                status: {
                    200: preferenceArray,
                    400: undefined,
                    404: undefined,
                    500: undefined
                }
            }
        }
    },
    {
        method: 'GET',
        path: '/preferences/{id}',
        options: {
            handler: handler.fetchPreferenceById,
            description: 'Get preference by id',
            notes: 'Returns preference by id',
            tags: ['api', 'preference'],
            validate: {
                params: uuid
            },
            response: {
                status: {
                    200: preference,
                    400: undefined,
                    404: undefined,
                    500: undefined
                }
            }
        }
    },
    {
        method: 'GET',
        path: '/preferences/users/{id}',
        options: {
            handler: handler.fetchPreferencesByIdUser,
            description: 'Get preferences by user id',
            notes: 'Returns Preferences by user id',
            tags: ['api', 'preference'],
            validate: {
                params: string
            },
            response: {
                status: {
                    200: preferenceArray,
                    400: undefined,
                    404: undefined,
                    500: undefined
                }
            }
        }
    },
    {
        method: 'POST',
        path: '/preferences',
        options: {
            handler: handler.createPreference,
            description: 'Create preference',
            notes: 'Creates a new preference',
            tags: ['api', 'preference'],
            validate: {
                payload: preference
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
        path: '/preferences/{id}',
        options: {
            handler: handler.updatePreference,
            description: 'Update preference by id',
            notes: 'Updates a preference by id',
            tags: ['api', 'preferences'],
            validate: {
                params: uuid,
                payload: preference
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
        path: '/preferences/{id}',
        options: {
            handler: handler.deletePreference,
            description: 'Delete preferences by id',
            notes: 'Deletes a preferences by id',
            tags: ['api', 'preferences'],
            validate: {
                params: uuid
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

export default preferencesRoutes;
