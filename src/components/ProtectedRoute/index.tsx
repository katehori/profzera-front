import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
	children: React.ReactNode;
	isAuthenticated?: boolean;
	redirectTo?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
	children, 
	isAuthenticated = false, 
	redirectTo = '/login' 
}) => {
  	return isAuthenticated ? <>{children}</> : <Navigate to={redirectTo} replace />;
};

export default ProtectedRoute;