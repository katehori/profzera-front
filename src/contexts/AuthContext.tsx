import React, { createContext, useState, ReactNode } from 'react';

interface User {
	id: number;
	username: string;
	type: number;
}

interface AuthContextType {
	canCreateAndEdit: () => boolean;
	canDelete: () => boolean;
	isAdmin: () => boolean;
	isAuthenticated: boolean;
	isStudent: () => boolean;
	isTeacher: () => boolean;
	login: (userData: User) => void;
	logout: () => void;
	user: User | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  	children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState<User | null>(null);

	const login = (userData: User) => {
		setIsAuthenticated(true);
		setUser(userData);
		localStorage.setItem('user', JSON.stringify(userData));
	};

	const logout = () => {
		setIsAuthenticated(false);
		setUser(null);
		localStorage.removeItem('user');
	};

	const isAdmin = () => user?.type === 0; // 0 = administrador
	const isTeacher = () => user?.type === 1; // 1 = professor
	const isStudent = () => user?.type === 2; // 2 = aluno
	const canCreateAndEdit = () => isAdmin() || isTeacher();
	const canDelete = () => isAdmin();

	React.useEffect(() => {
		const savedUser = localStorage.getItem('user');

		if (savedUser) {
			try {
				const userData = JSON.parse(savedUser);
				setIsAuthenticated(true);
				setUser(userData);
			} catch {
				alert('Erro ao recuperar dados do usuário.');
				localStorage.removeItem('user');
			}
		}
	}, []);

  return (
		<AuthContext.Provider value={{ 
			canCreateAndEdit,
			canDelete,
			isAdmin,
			isAuthenticated, 
			isStudent,
			isTeacher, 
			login, 
			logout,
			user
		}}>
			{children}
		</AuthContext.Provider>
  );
};