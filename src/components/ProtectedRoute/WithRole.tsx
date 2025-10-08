import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

interface ProtectedRouteWithRoleProps {
	children: React.ReactNode;
	allowedRoles?: number[];
	redirectTo?: string;
}

const ProtectedRouteWithRole: React.FC<ProtectedRouteWithRoleProps> = ({ 
	children, 
	allowedRoles = [0, 1], // 0 = admin, 1 = professor
	redirectTo = '/posts' 
}) => {
	const { user } = useAuth();
	
	const hasPermission = user && allowedRoles.includes(user.type);
	
	return hasPermission ? <>{children}</> : <Navigate to={redirectTo} replace />;
};

export default ProtectedRouteWithRole;
