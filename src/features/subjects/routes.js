import handler from './handler';
import uuid from '../common';
import { subject, subjectArray } from './validators';

const subjectRoutes = [
    {
        method: 'GET',
        path: '/subjects',
        options: {
            handler: handler.fetchSubjects,
            description: 'Get datas',
            notes: 'Returns all datas',
            tags: ['api', 'data'],
            response: {
                status: {
                    200: subjectArray,
                    400: undefined,
                    404: undefined,
                    500: undefined,
                },
            },
        },
    },
    {
        method: 'GET',
        path: '/subjects/{id}',
        options: {
            handler: handler.fetchSubjectById,
            description: 'Get data by id',
            notes: 'Returns data by id',
            tags: ['api', 'data'],
            validate: {
                params: uuid,
            },
            response: {
                status: {
                    200: subject,
                    400: undefined,
                    404: undefined,
                    500: undefined,
                },
            },
        },
    },
    {
        method: 'POST',
        path: '/subjects',
        options: {
            handler: handler.createSubject,
            description: 'Create data',
            notes: 'Creates a new data',
            tags: ['api', 'data'],
            validate: {
                payload: subject,
            },
            response: {
                status: {
                    201: undefined,
                    400: undefined,
                    409: undefined,
                    500: undefined,
                },
            },
        },
    },
    {
        method: 'PATCH',
        path: '/subjects/{id}',
        options: {
            handler: handler.updateSubject,
            description: 'Update data by id',
            notes: 'Updates a data by id',
            tags: ['api', 'data'],
            validate: {
                params: uuid,
                payload: subject,
            },
            response: {
                status: {
                    204: undefined,
                    400: undefined,
                    500: undefined,
                },
            },
        },
    },
    {
        method: 'DELETE',
        path: '/subjects/{id}',
        options: {
            handler: handler.deleteSubject,
            description: 'Delete data by id',
            notes: 'Deletes a data by id',
            tags: ['api', 'data'],
            validate: {
                params: uuid,
            },
            response: {
                status: {
                    204: undefined,
                    400: undefined,
                    500: undefined,
                },
            },
        },
    },
];

export default subjectRoutes;
