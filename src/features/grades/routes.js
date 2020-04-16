import handler from './handler';
import {integer} from '../common';
import {grade, gradeArray, userGrade, userGradeArray} from './validators';

const GradeRoutes = [
    {
        method: 'GET',
        path: '/grades',
        options: {
            handler: handler.fetchGrades,
            description: 'Get grades',
            notes: 'Returns all grades',
            tags: ['api', 'grade'],
            response: {
                status: {
                    200: gradeArray,
                    400: undefined,
                    404: undefined,
                    500: undefined
                }
            }
        }
    },
    {
        method: 'GET',
        path: '/grades/{id}',
        options: {
            handler: handler.fetchGradeById,
            description: 'Get grade by id',
            notes: 'Returns grade by id',
            tags: ['api', 'grade'],
            validate: {
                params: integer
            },
            response: {
                status: {
                    200: grade,
                    400: undefined,
                    404: undefined,
                    500: undefined
                }
            }
        }
    },
    {
        method: 'POST',
        path: '/grades',
        options: {
            handler: handler.createGrade,
            description: 'Create grade',
            notes: 'Creates a new grade',
            tags: ['api', 'grade'],
            validate: {
                payload: grade
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
        path: '/grades/{id}',
        options: {
            handler: handler.updateGrade,
            description: 'Update grade by id',
            notes: 'Updates a grade by id',
            tags: ['api', 'grade'],
            validate: {
                params: integer,
                payload: grade
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
        path: '/grades/{id}',
        options: {
            handler: handler.deleteGrade,
            description: 'Delete grade by id',
            notes: 'Deletes a grade by id',
            tags: ['api', 'grade'],
            validate: {
                params: integer
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
        method: 'POST',
        path: '/grades/users',
        options: {
            handler: handler.createUserGrade,
            description: 'Create userGrade',
            notes: 'Set a new grade to user',
            tags: ['api', 'userGrade'],
            validate: {
                payload: userGrade
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
    }
];

export default GradeRoutes;
