import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const SearchContainer = styled.div`
	max-width: 400px;
	position: relative;
	width: 100%;
`;

const SearchInput = styled.input`
	border-radius: 8px;
	border: 1px solid #ccc;
	font-size: 1rem;
	padding: 10px 40px 10px 12px;
	transition: all 0.2s ease-in-out;
	width: 100%;
  
  &:focus {
	border-color: #007bff;
	box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
	outline: none;
  }
  
  &::placeholder {
	color: #999;
  }
`;

const SearchIcon = styled(FaSearch)`
	color: #999;
	pointer-events: none;
	position: absolute;
	right: 12px;
	top: 50%;
	transform: translateY(-50%);
`;

interface SearchProps {
	placeholder?: string;
	onSearch: (searchTerm: string) => void;
  	delay?: number;
}

const Search: React.FC<SearchProps> = ({ 
	placeholder = "Buscar publicações...",
	onSearch,
	delay = 500
}) => {
  const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		const timer = setTimeout(() => {
			onSearch(searchTerm);
		}, delay);

		return () => clearTimeout(timer);
	}, [searchTerm, delay, onSearch]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			onSearch(searchTerm);
		}
	};

	return (
		<SearchContainer>
			<SearchInput
				type="text"
				value={searchTerm}
				onChange={handleInputChange}
				onKeyPress={handleKeyPress}
				placeholder={placeholder}
			/>
			<SearchIcon />
		</SearchContainer>
	);
};

export default Search;