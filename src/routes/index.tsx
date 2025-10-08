import { Navigate } from 'react-router-dom';
import PostCreate from '../pages/Posts/Create';
import PostEdit from '../pages/Posts/[id]/Edit';
import PostList from '../pages/Posts';
import PostView from '../pages/Posts/[id]';
import ProtectedRoute from '../components/ProtectedRoute';
import ProtectedRouteWithRole from '../components/ProtectedRoute/WithRole';
import UserLogIn from '../pages/Users/LogIn';
import UserRegister from '../pages/Users/Register';

interface RouteConfig {
	path: string;
	element: React.ReactNode;
}

export const createRoutes = (isAuthenticated: boolean): RouteConfig[] => [
	{
		path: '/',
		element: <Navigate to="/posts" replace />
	},
	{
		path: '/posts',
		element: <PostList />
	},
	{
		path: '/posts/create',
		element: (
			<ProtectedRoute isAuthenticated={isAuthenticated}>
				<ProtectedRouteWithRole>
					<PostCreate />
				</ProtectedRouteWithRole>
			</ProtectedRoute>
		)
	},
	{
		path: '/posts/:id',
		element: <PostView />
	},
	{
		path: '/posts/:id/edit',
		element: (
			<ProtectedRoute isAuthenticated={isAuthenticated}>
				<ProtectedRouteWithRole>
					<PostEdit />
				</ProtectedRouteWithRole>
			</ProtectedRoute>
		)
	},
	{
		path: '/register',
		element: <UserRegister />
	},
	{
		path: '/login',
		element: <UserLogIn />
	},
	{
		path: '*',
		element: <div>Página não encontrada - 404</div>
	}
];

const routes: RouteConfig[] = [
	{ path: '/', element: <Navigate to="/posts" replace /> },
	{ path: '/posts', element: <PostList /> },
	{ path: '/posts/create', element: <PostCreate /> },
	{ path: '/posts/:id', element: <PostView /> },
	{ path: '/posts/:id/edit', element: <PostEdit /> },
	{ path: '/register', element: <UserRegister /> },
	{ path: '/login', element: <UserLogIn /> },
	{ path: '*', element: <div>Página não encontrada - 404</div> }
];

export default routes;
