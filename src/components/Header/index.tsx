import { FaArrowRightToBracket, FaArrowRightFromBracket } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    align-items: center;
    border-bottom-color: hsla(220, 20%, 80%, 0.4);
    border-bottom-style: solid;
    border-bottom-width: 1px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    min-height: 80px;
    padding: 12px 32px;
    position: relative;
    gap: 20px;
`;

const Logo = styled.img`
    height: 60px;
    width: auto;
`;

const HeaderActions = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #333;
    font-weight: 500;
`;

const Header: React.FC = () => {
	const navigate = useNavigate();
	const { isAuthenticated, user, logout } = useAuth();

	const handleLogIn = () => {
		navigate('/login');
	};

	const handleLogout = () => {
		logout();
		navigate('/login');
	};

  	return (
		<Nav>
			<Link to="/posts">
				<Logo src="/assets/profzera.png" alt="Profzera" />
			</Link>

			<HeaderActions>
				{isAuthenticated ? (
					<>
						<UserInfo>
							<FaUser />
								<span>Olá, {user?.username}</span>
							<Button 
								variant="danger" 
								size="small"
								icon={<FaArrowRightFromBracket />} 
								onClick={handleLogout}
							>
								Sair
							</Button>
						</UserInfo>
					</>
				) : (
					<Button 
						variant="primary" 
						size="small"
						icon={<FaArrowRightToBracket />} 
						onClick={handleLogIn}
					>
						Entrar
					</Button>
				)}
			</HeaderActions>
		</Nav>
	);
};

export default Header;