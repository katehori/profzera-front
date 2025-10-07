
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { createRoutes } from './routes';
import { useAuth } from './hooks/useAuth';
import Footer from './components/Footer'
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header'

// Componente interno para usar a autenticação
function AppRoutes() {
	const { isAuthenticated } = useAuth();
	const routes = createRoutes(isAuthenticated);

  return (
    <Routes>
		{routes.map((route, index) => (
			<Route 
				key={index} 
				path={route.path} 
				element={route.element} 
			/>
		))}
    </Routes>
  );
}

function App() {
	return (
		<AuthProvider> 
			<Router>
				<div className="app-container">
					<Header />
              		<GlobalStyles />
          			<AppRoutes />
					<Footer />
				</div>
			</Router>
		</AuthProvider> 
	);
}

export default App;