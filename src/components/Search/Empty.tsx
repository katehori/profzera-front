import styled from 'styled-components';

const SearchEmptyContainer = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 3rem;
	text-align: center;
`;

const SearchEmptyMessage = styled.p`
	color: #666;
	font-size: 1.2rem;
`;

const SearchEmptySugestion = styled.p`
	color: #888;
	font-size: 1rem;
`;

const SearchEmptyButton = styled.button`
	background: #fff;
	border-radius: 4px;
	border: 1px solid #004aad;
	color: #004aad;
	cursor: pointer;
	padding: 8px 16px;

	&:hover:not(:disabled) {
		background-color: #004aad;
		color: #fff;
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
	}
`;


interface SearchEmptyProps {
	onClearSearch?: () => void;
	searchTerm?: string;
	suggestion?: string;
}

const SearchEmpty: React.FC<SearchEmptyProps> = ({ 
	onClearSearch,
	searchTerm
}) => {
  return (
    <SearchEmptyContainer>
		<SearchEmptyMessage>
			{searchTerm 
				? `Nenhum resultado encontrado para "${searchTerm}".`
				: 'Nenhum item disponível.'
			}
		</SearchEmptyMessage>
      	<SearchEmptySugestion>
			Tente usar termos diferentes ou verifique a ortografia.
		</SearchEmptySugestion>
		{searchTerm && onClearSearch && (
			<SearchEmptyButton onClick={onClearSearch}>
				Limpar busca
			</SearchEmptyButton>
		)}
    </SearchEmptyContainer>
  );
};

export default SearchEmpty;