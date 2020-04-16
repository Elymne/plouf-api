import teapotRoutes from '../features/teapot';
import subjectRoutes from '../features/subjects';
import gradeRoutes from '../features/grades';

const routes = [...teapotRoutes, ...subjectRoutes, ...gradeRoutes];

export default routes;
