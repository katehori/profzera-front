import { useState, useRef, useEffect } from 'react';
import api from '../api';

interface UsePostSearchReturn {
	/* searchLoading: boolean; */
	searchTerm: string;
	filteredPosts: any[];
	handleSearch: (term: string) => Promise<void>;
	clearSearch: () => void;
}

export const usePostSearch = (posts: any[]): UsePostSearchReturn => {
	/* const [searchLoading, setSearchLoading] = useState(false); */
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredPosts, setFilteredPosts] = useState<any[]>(posts);
	const previousSearchTermRef = useRef<string>('');

	useEffect(() => {
		if (searchTerm.trim() === '') {
			setFilteredPosts(posts);
		}
	}, [posts, searchTerm]);

  	const handleSearch = async (term: string) => {
		if (term === previousSearchTermRef.current) {
			return;
		}

		previousSearchTermRef.current = term;
		setSearchTerm(term);

		if (term.trim() === '') {
			setFilteredPosts(posts);
			/* setSearchLoading(false); */
		} else {
			/* setSearchLoading(true); */

			try {
				const response = await api.get(`/posts/search?term=${encodeURIComponent(term)}`);
				setFilteredPosts(response.data);
			} catch {
				alert('Erro na busca:');

				// Fallback: busca local
				const filtered = posts.filter(post =>
				post.title?.toLowerCase().includes(term.toLowerCase()) ||
				post.content?.toLowerCase().includes(term.toLowerCase()) ||
				post.author?.toLowerCase().includes(term.toLowerCase()) ||
				post.username?.toLowerCase().includes(term.toLowerCase())
				);
				setFilteredPosts(filtered);
			} finally {
				/* setSearchLoading(false); */
			}
		}
  	};

  	const clearSearch = () => {
		setSearchTerm('');
		setFilteredPosts(posts);
  	};

	return {
		/* searchLoading, */
		clearSearch,
		handleSearch,
		searchTerm,
    	filteredPosts
	};
};