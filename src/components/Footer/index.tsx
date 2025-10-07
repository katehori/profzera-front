import React from 'react';
import CustomLink from '../CustomLink';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    border-top-color: rgba(0, 0, 0, 0.1);
    border-top-style: solid;
    border-top-width: 1px;
    bottom: 0;
    padding: 2rem;
    position: absolute;
    text-align: center;
    width: 100%;
  
    div {
        padding: 12px;
    }
`;

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <div><CustomLink to="/posts">Termos & Condições</CustomLink> / <CustomLink to="/posts">Política de Privacidade</CustomLink></div>
            <div>Copyright ©2025 Todos os direitos reservados para Profzera</div>
        </FooterContainer>
    );
};

export default Footer;