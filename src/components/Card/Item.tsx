import { FaReadme, FaEdit, FaTrash } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from "react-router-dom";
import Button from '../Button';
import ButtonActions from '../Button/Actions';
import styled from 'styled-components';

const Item = styled.div`
	border-radius: 12px;
	border-color: rgba(0, 0, 0, 0.1);
    border-style: solid;
    border-width: 1px;
	padding: 1.5rem;
`

const Info = styled.div`
	font-size: 0.90rem;
	margin-bottom: 12px;
`

const Author = styled.span`
  	font-weight: 600;
`

const CreatedAt = styled.span`
  	color: #999;
`

const Title = styled.h3`
	font-size: 1.25rem;
	margin-bottom: 0.5rem;
  	font-weight: 700;
`

const Content = styled.p`
	font-size: 14px;
  	color: #888;
  	line-height: 1.6;
    margin-bottom: 1rem;

	/* Limita a 3 linhas com ellipsis */
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
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

	const { isAuthenticated } = useAuth();

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
			<ButtonActions>
				<Button
					variant="primary"
					icon={<FaReadme />}
					onClick={handleViewClick}
				>
					Ver
				</Button>
				{isAuthenticated && (
					<>
						<Button
							variant="primary"
							icon={<FaEdit />}
							onClick={handleEditClick}
							disabled={isDeleting}
						>
							Editar
						</Button>
						<Button
							variant="danger"
							icon={<FaTrash />}
							onClick={handleDeleteClick}
							disabled={isDeleting}
						>
							Excluir
						</Button>
					</>
				)}
			</ButtonActions>
		</Item>
	);
};

export default Card;