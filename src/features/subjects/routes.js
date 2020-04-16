import handler from './handler';
import uuid from '../common';
import { subject, subjectArray } from './validators';

const subjectRoutes = [
    {
        method: 'GET',
        path: '/subjects',
        options: {
            handler: handler.fetchSubjects,
            description: 'Get subjects',
            notes: 'Returns all subjects',
            tags: ['api', 'subject'],
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
            description: 'Get subject by id',
            notes: 'Returns subject by id',
            tags: ['api', 'subject'],
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
            description: 'Create subject',
            notes: 'Creates a new subject',
            tags: ['api', 'subject'],
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
            description: 'Update subject by id',
            notes: 'Updates a subject by id',
            tags: ['api', 'subject'],
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
            description: 'Delete subject by id',
            notes: 'Deletes a subject by id',
            tags: ['api', 'subject'],
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
