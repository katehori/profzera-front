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
    background: #fff;
    border-bottom-color: hsla(220, 20%, 80%, 0.4);
    border-bottom-style: solid;
    border-bottom-width: 1px;
    display: flex;
    gap: 1.25rem;
    justify-content: space-between;
    min-height: 80px;
    padding: 1rem 2rem;
    position: relative;

    @media (max-width: 1024px) {
        gap: 1rem;
        min-height: 70px;
        padding: 1rem 1.5rem;
    }

    @media (max-width: 768px) {
        gap: 0.75rem;
        min-height: 65px;
        padding: 0.75rem 1.25rem;
    }

    @media (max-width: 576px) {
        flex-wrap: wrap;
        gap: 0.5rem;
        min-height: 60px;
        padding: 0.5rem 1rem;
    }

    @media (max-width: 480px) {
        min-height: 55px;
        padding: 0.5rem 0.75rem;
    }
`;

const Logo = styled.img`
    height: 60px;
    object-fit: contain;
    width: auto;

    @media (max-width: 1024px) {
        height: 55px;
    }

    @media (max-width: 768px) {
        height: 50px;
    }

    @media (max-width: 576px) {
        height: 45px;
    }

    @media (max-width: 480px) {
        height: 40px;
    }
`;

const HeaderActions = styled.div`
    align-items: center;
    display: flex;
    gap: 15px;

    @media (max-width: 576px) {
        gap: 0.75rem;
    }

    @media (max-width: 480px) {
        gap: 0.5rem;
    }
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #333;
    font-weight: 500;

    @media (max-width: 768px) {
        gap: 0.5rem;
    }

    @media (max-width: 576px) {
        gap: 0.375rem;
    }

    @media (max-width: 480px) {
        align-items: flex-end;
        flex-direction: column;
        gap: 0.25rem;
    }
`;

const UserText = styled.span`
    align-items: center;
    display: flex;
    font-size: 0.95rem;
    gap: 0.5rem;

    @media (max-width: 768px) {
        font-size: 0.9rem;
        gap: 0.375rem;
    }

    @media (max-width: 576px) {
        font-size: 0.85rem;
    }

    @media (max-width: 480px) {
        font-size: 0.8rem;
        
        span:not(.icon) {
            display: none;
        }
    }

    @media (max-width: 320px) {
        font-size: 0.75rem;
    }
`;

const IconWrapper = styled.span`
    align-items: center;
    display: flex;
    justify-content: center;
    
    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;

const StyledButton = styled(Button)`
    @media (max-width: 480px) {
        min-width: auto;
        padding: 0.5rem;
        
        .button-text {
            display: none;
        }
        
        .button-icon {
            margin-right: 0;
        }
    }

    @media (max-width: 320px) {
        padding: 0.375rem;
    }
`;

const MobileUserInfo = styled.div`
    display: none;
    
    @media (max-width: 480px) {
        align-items: flex-end;
        display: flex;
        flex-direction: column;
        gap: 0.125rem;
    }
`;

const Username = styled.span`
    font-size: 0.8rem;
    color: #666;
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
							<UserText>
                                <IconWrapper>
                                    <FaUser />
                                </IconWrapper>
                                <span>Olá, {user?.username}</span>
                            </UserText>
                            <MobileUserInfo>
                                <Username>Olá, {user?.username}</Username>
                            </MobileUserInfo>
							<StyledButton 
								variant="danger" 
								size="small"
								icon={<FaArrowRightFromBracket />} 
								onClick={handleLogout}
							>
								Sair
							</StyledButton>
						</UserInfo>
					</>
				) : (
					<StyledButton 
						variant="primary" 
						size="small"
						icon={<FaArrowRightToBracket />} 
						onClick={handleLogIn}
					>
						Entrar
					</StyledButton>
				)}
			</HeaderActions>
		</Nav>
	);
};

export default Header;