import React, { createContext, useState, ReactNode } from 'react';

interface User {
	id: number;
	username: string;
	type: string;
}

interface AuthContextType {
	isAuthenticated: boolean;
	user: User | null;
	login: (userData: User) => void;
	logout: () => void;
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
		<AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
			{children}
		</AuthContext.Provider>
  );
};