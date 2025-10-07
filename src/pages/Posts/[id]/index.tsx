import { FaReadme, FaEdit, FaTrash } from 'react-icons/fa';
import { Post } from '../../../reducers/types';
import { useAuth } from '../../../hooks/useAuth';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { usePostDelete } from '../../../hooks/usePostDelete';
import api from '../../../api'
import Breadcrumb from '../../../components/Breadcrumb';
import Button from '../../../components/Button';
import PostContainer from '../../../components/Post/Container';
import styled from "styled-components";

const Info = styled.div`
	margin-bottom: 4rem;
	text-align: center;
`

const Author = styled.div`
	color: #888;
	font-size: 1.25rem;
	font-weight: 500;
`

const CreatedAt = styled.div`
	color: #888;
	font-size: 0.90rem;
`

const Title = styled.h3`
	font-size: 2rem;
	margin-bottom: 2rem;
	text-align: center;
  	font-weight: 700;
`

const Content = styled.p`
  	color: #888;
	font-size: 1rem;
  	line-height: 1.6;
	text-align: justify;
`

const PostView: React.FC = () => {
	const navigate = useNavigate();

	const { isAuthenticated } = useAuth();

	const { id } = useParams<{ id: string }>();
	const [post, setPost] = useState<Post | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

	const handleEditClick = () => {
		navigate(`/posts/${id}/edit`);
	};

	const { deletePost, isDeleting } = usePostDelete({
		onSuccess: () => {
			navigate('/posts', { 
				replace: true,
				state: { message: 'Publicação excluída com sucesso!' }
			});
		}
	});

	const handleDeleteClick = async () => {
		if (!id || !post) return;
		
		await deletePost(id, post.title);
	};

	const actionButtons = (
		<>
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
						{isDeleting ? 'Excluindo...' : 'Excluir'}
					</Button>
				</>
			)}
		</>
	);

	useEffect(() => {
		if (id) {
			setLoading(true);
			setError(null);
			api.get(`/posts/${id}`)
					.then(response => {
					setPost(response.data);
				})
				.catch(() => {
					setError('Erro ao exibir a publicação');
					setPost(null);
				})
				.finally(() => {
					setLoading(false);
				});
		} else {
			setError('ID da publicação não fornecido');
			setLoading(false);
		}
	}, [id]);

	const formatDate = (date: Date | undefined) => {
		return date ? new Date(date).toLocaleString() : '';
	};

	if (loading || isDeleting) return <div>Carregando...</div>;

	if (error) return <div>{error}</div>;

	if (!post) return <div>Publicação não encontrada...</div>;

	return (
		<>
			<PostContainer>
				<Breadcrumb 
					items={[
						{ label: 'Publicações', path: '/posts' },
						{ label: `Visualizando: ${id}` }
					]}
					actionButtons={actionButtons}
				/>

				<Info>
					<Author>
						{post.username}
					</Author>
					<CreatedAt>
						{formatDate(post.createdAt)}
					</CreatedAt>
				</Info>
				<Title>
					{post.title}
				</Title>

				<Content>
					{post.content}
				</Content>
			</PostContainer>
		</>
	);
};

export default PostView;
