import styled from "styled-components";

const CardContainer = styled.div`
	display: grid;
	gap: 2rem;
	grid-template-columns: repeat(3, 1fr);
	margin: 0 auto;
	max-width: 1400px;
    padding: 0 1rem;
    width: 100%;

    @media (max-width: 1200px) {
        gap: 1.75rem;
        grid-template-columns: repeat(3, 1fr);
        max-width: 1100px;
    }

    @media (max-width: 992px) {
        gap: 1.5rem;
        grid-template-columns: repeat(2, 1fr);
        max-width: 800px;
    }

    @media (max-width: 768px) {
        gap: 1.25rem;
        grid-template-columns: repeat(2, 1fr);
        max-width: 100%;
        padding: 0 0.75rem;
    }

    @media (max-width: 576px) {
        gap: 1rem;
        grid-template-columns: 1fr;
        padding: 0 0.5rem;
    }

    @media (max-width: 375px) {
        gap: 0.75rem;
        padding: 0 0.25rem;
    }
`

export default CardContainer;