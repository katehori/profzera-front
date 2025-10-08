import React from 'react';
import CustomLink from '../CustomLink';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: #ffffff;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    bottom: 0;
    left: 0;
    padding: 2rem 1rem;
    position: absolute;
    right: 0;
    text-align: center;
    width: 100%;
    z-index: 100;

    @media (max-width: 768px) {
        padding: 1.5rem 1rem;
    }

    @media (max-width: 480px) {
        padding: 1rem 0.5rem;
    }
`;

const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin: 0 auto;
    max-width: 1200px;
    
    @media (max-width: 768px) {
        gap: 0.5rem;
    }
`;

const LinksContainer = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
    
    a:not(:last-child)::after {
        content: "/";
        margin-left: 0.5rem;
        color: rgba(0, 0, 0, 0.3);
    }
    
    @media (max-width: 480px) {
        flex-direction: column;
        gap: 0.25rem;
        
        a:not(:last-child)::after {
            content: none;
        }
    }
`;

const CopyrightText = styled.div`
    color: #666;
    font-size: 0.9rem;
    line-height: 1.4;
    
    @media (max-width: 768px) {
        font-size: 0.85rem;
    }
    
    @media (max-width: 480px) {
        font-size: 0.8rem;
        padding: 0 0.5rem;
    }
`;

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <FooterContainer>
            <FooterContent>
                <LinksContainer>
                    <CustomLink to="/">Termos & Condições</CustomLink>
                    <CustomLink to="/">Política de Privacidade</CustomLink>
                </LinksContainer>
                <CopyrightText>
                    Copyright ©{currentYear} Todos os direitos reservados para Profzera
                </CopyrightText>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;