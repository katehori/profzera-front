import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    border-bottom: 4px solid rgba(255, 222, 89, 0.4);

    &:hover {
        border-color: #ffde59;
    }
`;

interface CustomLinkProps {
	to: string;
	children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ to, children }) => {
  	return <StyledLink to={to}>{children}</StyledLink>;
};

export default CustomLink;