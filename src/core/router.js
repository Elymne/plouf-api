import teapotRoutes from '../features/teapot';
import subjectRoutes from '../features/subjects';
import gradeRoutes from '../features/grades';
import userRoutes from '../features/users';
import preferenceRoutes from '../features/preferences';

const routes = [
    ...teapotRoutes,
    ...subjectRoutes,
    ...gradeRoutes,
    ...userRoutes,
    ...preferenceRoutes
];

export default routes;
