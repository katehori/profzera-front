import styled from "styled-components";

const StyledResults = styled.span`
    color: #666;
    font-size: 1rem;
    font-weight: normal;
    margin-left: 10px;
    vertical-align: middle;
`

interface SearchResultsProps {
    searchTerm?: string;
    resultsCount: number;
}

const SearchResults: React.FC<SearchResultsProps> = ({ 
    searchTerm, 
    resultsCount
}) => {
    const getMessage = () => {
        if (searchTerm) {
            return `- ${resultsCount} resultado(s) para "${searchTerm}"`;
        } else {
            return `(Total: ${resultsCount})`;
        }
    };

    return (
        <StyledResults>
            {getMessage()}
        </StyledResults>
    );
};

export default SearchResults;