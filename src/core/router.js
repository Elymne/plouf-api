import teapotRoutes from '../features/teapot';
import subjectRoutes from '../features/subjects';
import gradeRoutes from '../features/grades';
import userRoutes from '../features/users';

const routes = [
    ...teapotRoutes,
    ...subjectRoutes,
    ...gradeRoutes,
    ...userRoutes
];

export default routes;
