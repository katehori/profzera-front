import styled from "styled-components";

const PostContainer = styled.main`
    background: #fff;
    display: flex;
    flex-direction: column;
    height: 58px * 100dvh);
    justify-content: space-between;
    margin: 2rem;
    min-height: 100%;
    padding: 16px;
    padding: 2rem;
    width: calc(100% - 4rem);

    @media (max-width: 1440px) {
        margin: 1.5rem;
        padding: 1.75rem;
        width: calc(100% - 3rem);
    }

    @media (max-width: 1200px) {
        margin: 1.25rem;
        padding: 1.5rem;
        width: calc(100% - 2.5rem);
    }

    @media (max-width: 1024px) {
        margin: 1rem;
        padding: 1.25rem;
        width: calc(100% - 2rem);
    }

    @media (max-width: 768px) {
        margin: 0.75rem;
        padding: 1rem;
        width: calc(100% - 1.5rem);
    }

    @media (max-width: 576px) {
        margin: 0.5rem;
        padding: 0.75rem;
        width: calc(100% - 1rem);
    }

    @media (max-width: 480px) {
        margin: 0.25rem;
        padding: 0.5rem;
        width: calc(100% - 0.5rem);
    }

    @media (max-width: 320px) {
        margin: 0.125rem;
        padding: 0.375rem;
        width: calc(100% - 0.25rem);
    }
`

export default PostContainer;