import { FaPlus } from 'react-icons/fa';
import { PostState } from '../../reducers/types';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
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
/* import SearchLoading from '../../components/Search/Loading'; */
import SearchResults from '../../components/Search/Results';

const initialState: PostState = { 
	posts: [], 
	loading: true, 
	error: null 
};

const PostList: React.FC = () => {
	const navigate = useNavigate();
	const { isAuthenticated } = useAuth();

	const [searchTerm, setSearchTerm] = useState('');
	const [filteredPosts, setFilteredPosts] = useState<any[]>([]);
	const [searchLoading, setSearchLoading] = useState(false);
  	const previousSearchTermRef = useRef<string>('');

	const [state, dispatch] = useReducer(postReducer, initialState);

	useEffect(() => {
		dispatch({ type: 'SET_LOADING', payload: true });

		api.get('/posts')
			.then(response => {
				dispatch({ type: 'SET_POSTS', payload: response.data });
				setFilteredPosts(response.data);
			})
			.catch(() => {
				alert('Erro ao carregar publicações');
				dispatch({ type: 'SET_ERROR', payload: 'Erro ao carregar publicações' });
			});
	}, []);

	const handleSearch = async (term: string) => {
		if (term === previousSearchTermRef.current) {
			return;
		}

		previousSearchTermRef.current = term;
    	setSearchTerm(term);

		if (term.trim() === '') {
			setFilteredPosts(state.posts);
			setSearchLoading(false);
		} else {
			setSearchLoading(true);

			try {
				const response = await api.get(`/posts/search?term=${encodeURIComponent(term)}`);
				setFilteredPosts(response.data);
			} catch (error) {
				console.error('Erro na busca:', error);

				// Fallback: busca local nos posts já carregados
				const filtered = state.posts.filter(post =>
					post.title?.toLowerCase().includes(term.toLowerCase()) ||
					post.content?.toLowerCase().includes(term.toLowerCase()) ||
					post.username?.toLowerCase().includes(term.toLowerCase())
				);
				setFilteredPosts(filtered);
			} finally {
				setSearchLoading(false);
			}
		}
	};

	const handleCreateClick = () => {
		navigate('/posts/create');
	};

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
						/>
					))}
				</CardContainer>
			) : (
				<SearchEmpty searchTerm={searchTerm} onClearSearch={() => setSearchTerm('')} />
			)}
		</PostContainer>
    </>
  )
};

export default PostList;
