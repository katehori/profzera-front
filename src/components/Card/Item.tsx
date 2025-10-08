import { FaReadme, FaEdit, FaTrash } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from "react-router-dom";
import Button, { ButtonGroup } from '../Button';
import styled from 'styled-components';

const Item = styled.div`
	border-color: rgba(0, 0, 0, 0.1);
	border-radius: 12px;
	padding: 1.5rem;
    background: #fff;
    border-style: solid;
    border-width: 1px;

    @media (max-width: 768px) {
        border-radius: 10px;
        padding: 1.25rem;
    }

    @media (max-width: 480px) {
        border-radius: 8px;
        padding: 1rem;
    }

    @media (max-width: 320px) {
        padding: 0.75rem;
    }
`

const Info = styled.div`
	font-size: 0.90rem;
	margin-bottom: 12px;

    @media (max-width: 480px) {
        font-size: 0.85rem;
        gap: 0.25rem;
        margin-bottom: 10px;
    }
`

const Author = styled.span`
  	font-weight: 600;
    color: #333;
`

const CreatedAt = styled.span`
  	color: #999;
    font-size: 0.85em;

    @media (max-width: 480px) {
        font-size: 0.8em;
    }
`

const Title = styled.h3`
    color: #202020;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 0.5rem;
    overflow-wrap: break-word;
    word-wrap: break-word;

    @media (max-width: 768px) {
        font-size: 1.15rem;
    }

    @media (max-width: 480px) {
        font-size: 1.1rem;
        margin-bottom: 0.4rem;
    }

    @media (max-width: 320px) {
        font-size: 1rem;
    }
`

const Content = styled.p`
	font-size: 14px;
  	color: #888;
  	line-height: 1.6;
    margin-bottom: 1rem;

	/* Limita a 3 linhas com ellipsis */
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    overflow: hidden;

	@media (max-width: 768px) {
        -webkit-line-clamp: 3;
        font-size: 13px;
        line-height: 1.5;
        margin-bottom: 1.25rem;
    }

    @media (max-width: 480px) {
        -webkit-line-clamp: 2;
        font-size: 12px;
        margin-bottom: 1rem;
    }

    @media (max-width: 320px) {
        -webkit-line-clamp: 2;
        font-size: 11px;
    }
`

const StyledButtonGroup = styled(ButtonGroup)`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    @media (max-width: 480px) {
        gap: 0.375rem;
    }

    @media (max-width: 320px) {
        flex-direction: column;
        gap: 0.5rem;
    }
`

const ButtonText = styled.span`
    @media (max-width: 480px) {
        display: none;
    }
`

const IconWrapper = styled.span`
    align-items: center;
    display: flex;
    justify-content: center;
    
    @media (max-width: 480px) {
        margin-right: 0;
    }
`

interface CardProps {
    id: number | string;
    title: string;
    content: string;
    username: string;
    createdAt?: Date | null;
    onDelete?: (id: number | string) => void;
	isDeleting?: boolean;
}

const Card: React.FC<CardProps> = ({
	id,
	username,
	createdAt,
	title,
	content,
    onDelete,
	isDeleting
}) => {
	const navigate = useNavigate();

	const { isAuthenticated, canCreateAndEdit, canDelete } = useAuth();

	const handleViewClick = () => {
		navigate(`/posts/${id}`);
	};

	const handleEditClick = () => {
		navigate(`/posts/${id}/edit`);
	};

	const handleDeleteClick = () => {
		if (onDelete) {
			onDelete(id);
		}
	};

	return (
		<Item>
			<Info>
				<Author>{username}</Author> <CreatedAt>{createdAt ? `, ${new Date(createdAt).toLocaleString()}` : ''}</CreatedAt>
			</Info>
			<Title>
				{title}
			</Title>
			<Content>
				{content}
			</Content>

			<StyledButtonGroup>
				<Button
					variant="primary"
					icon={<IconWrapper><FaReadme /></IconWrapper>}
					onClick={handleViewClick}
				>
					<ButtonText>Ver</ButtonText>
				</Button>
				{isAuthenticated && canCreateAndEdit() && (
					<Button
						variant="primary"
						icon={<IconWrapper><FaEdit /></IconWrapper>}
						onClick={handleEditClick}
						disabled={isDeleting}
					>
						<ButtonText>Editar</ButtonText>
					</Button>
				)}
				{isAuthenticated && canDelete() && (
					<Button
						variant="danger"
						icon={<IconWrapper><FaTrash /></IconWrapper>}
						onClick={handleDeleteClick}
						disabled={isDeleting}
					>
						<ButtonText>Excluir</ButtonText>
					</Button>
				)}
			</StyledButtonGroup>
		</Item>
	);
};

export default Card;