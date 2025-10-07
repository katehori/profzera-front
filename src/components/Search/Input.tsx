// components/Search/index.tsx
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 40px 10px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
  
  &::placeholder {
    color: #999;
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  pointer-events: none;
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