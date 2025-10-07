import styled from "styled-components";


const LoadingContainer = styled.div`
    align-items: center;
    color: #666;
    font-size: 1.2rem;
    text-align: center;
`;

interface SearchLoadingProps {
    searchLoading: boolean;
}

const SearchLoading: React.FC<SearchLoadingProps> = ({ 
    searchLoading
}) => {
    if (!searchLoading) return null;

    return (
        <LoadingContainer>
           Buscando...
        </LoadingContainer>
    );
};

export default SearchLoading;