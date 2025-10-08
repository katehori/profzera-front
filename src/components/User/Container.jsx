import styled from "styled-components";

const UserContainer = styled.main`
    display: flex;
    flex-direction: column;
    height: 58px * 100dvh);
    justify-content: space-between;
    margin: 2rem auto;
    max-width: 500px;
    padding: 2rem;
    width: 100%;

    @media (max-width: 1200px) {
        margin: 2rem 20%;
        max-width: 600px;
    }

    @media (max-width: 1024px) {
        margin: 2rem 15%;
        max-width: 500px;
        padding: 1.75rem;
    }

    @media (max-width: 768px) {
        margin: 1.5rem 10%;
        max-width: 450px;
        padding: 1.5rem;
    }

    @media (max-width: 576px) {
        margin: 0;
        max-width: 100%;
        padding: 1.25rem;
    }

    @media (max-width: 480px) {
        padding: 1rem;
    }

    @media (max-width: 320px) {
        padding: 0.75rem;
    }
`

export default UserContainer;