/* import SearchLoading from '../../components/Search/Loading'; */
import { FaPlus } from 'react-icons/fa';
import { PostState } from '../../reducers/types';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { usePostDelete } from '../../hooks/usePostDelete';
import { usePostSearch } from '../../hooks/usePostSearch';
import { useReducer, useEffect, useState, useRef } from 'react'
import api from '../../api';
import Breadcrumb from '../../components/Breadcrumb';
import Button from '../../components/Button';
import CardContainer from '../../components/Card/Container';
import CardItem from '../../components/Card/Item';
import Heading from '../../components/Heading';
import PostContainer from '../../components/Post/Container';
import postReducer from '../../reducers/postReducer';
import SearchEmpty from '../../components/Search/Empty';
import SearchInput from '../../components/Search/Input';
import SearchResults from '../../components/Search/Results';

const initialState: PostState = { 
	posts: [], 
	loading: true, 
	error: null 
};

const PostList: React.FC = () => {
	const navigate = useNavigate();

	const { isAuthenticated } = useAuth();

	const [state, dispatch] = useReducer(postReducer, initialState);

	const { 
		searchTerm, 
		filteredPosts, 
		handleSearch, 
		clearSearch 
	} = usePostSearch(state.posts);

	useEffect(() => {
		dispatch({ type: 'SET_LOADING', payload: true });

		api.get('/posts')
			.then(response => {
				dispatch({ type: 'SET_POSTS', payload: response.data });
			})
			.catch(() => {
				alert('Erro ao carregar publicações');
				dispatch({ type: 'SET_ERROR', payload: 'Erro ao carregar publicações' });
			});
	}, []);

	const handleCreateClick = () => {
		navigate('/posts/create');
	};

	const { deletePost, isDeleting } = usePostDelete({
		onSuccess: (postId) => {
			const updatedPosts = state.posts.filter(post => post.id !== postId);
			dispatch({ type: 'SET_POSTS', payload: updatedPosts });
		},
		onLoading: (loading) => {
			dispatch({ type: 'SET_LOADING', payload: loading });
		}
	});

	const actionButtons = (
		<>
      		<SearchInput onSearch={handleSearch} />

			{isAuthenticated && (
				<>
					<Button 
						variant="primary" 
						size="small"
						icon={<FaPlus />} 
						onClick={handleCreateClick}
					>
						Criar
					</Button>
				</>
			)}
		</>
	);

	if (state.loading) return <div>Carregando publicações...</div>

	if (state.error) return <div>Erro: {state.error}</div>

	return (
		<>
			<PostContainer>
				<Breadcrumb 
					items={[]}
					actionButtons={actionButtons}
				/>

				<Heading>
					Todas as publicações
					<SearchResults
						searchTerm={searchTerm}
						resultsCount={filteredPosts.length}
					/>
				</Heading>

				{/* <SearchLoading searchLoading={searchLoading} /> */}
				
				{filteredPosts.length > 0 ? (
					<CardContainer>
						{filteredPosts.map((post) => (
							<CardItem
								key={post.id}
								id={post.id}
								username={post.username}
								createdAt={post.createdAt}
								title={post.title}
								content={post.content}
								onDelete={(postId) => deletePost(postId, post.title)}
								isDeleting={isDeleting}
							/>
						))}
					</CardContainer>
				) : (
					<SearchEmpty searchTerm={searchTerm} onClearSearch={clearSearch} />
				)}
			</PostContainer>
		</>
	)
};

export default PostList;
