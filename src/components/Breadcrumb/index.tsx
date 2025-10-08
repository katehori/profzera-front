import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const BreadcrumbContainer = styled.nav`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    font-size: 1rem;
    gap: 1.25rem;
    justify-content: space-between;
    padding: 1rem 0;

    @media (max-width: 1024px) {
        font-size: 0.95rem;
        gap: 1rem;
        padding: 0.875rem 0;
    }

    @media (max-width: 768px) {
        align-items: flex-start;
        flex-direction: column;
        font-size: 0.9rem;
        gap: 0.75rem;
        padding: 0.75rem 0;
    }

    @media (max-width: 576px) {
        font-size: 0.85rem;
        gap: 0.5rem;
        padding: 0.5rem 0;
    }

    @media (max-width: 480px) {
        font-size: 0.8rem;
        gap: 0.375rem;
        padding: 0.375rem 0;
    }
`;

const BreadcrumbContent = styled.div`
    align-items: center;
    display: flex;
    flex: 1;
    min-width: 0;

    @media (max-width: 768px) {
        min-width: auto;
        width: 100%;
    }
`;

const BreadcrumbList = styled.ol`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (max-width: 576px) {
        gap: 0.125rem;
    }
`;

const BreadcrumbItem = styled.li`
    align-items: center;
    display: flex;
    flex-shrink: 0;
    
    &:not(:last-child)::after {
        color: #999;
        content: '${props => props['data-separator']}';
        flex-shrink: 0;
        margin: 0 0.5rem;

        @media (max-width: 768px) {
            margin: 0 0.375rem;
        }

        @media (max-width: 576px) {
            margin: 0 0.25rem;
        }
    }

    @media (max-width: 480px) {
        max-width: 120px;
        overflow: hidden;
    }

    @media (max-width: 320px) {
        max-width: 100px;
    }
`;

const BreadcrumbLink = styled(Link)`
    border-bottom: 4px solid rgba(255, 222, 89, 0.4);
    color: #888;
    display: block;
    max-width: 100%;
    overflow: hidden;
    padding: 0.125rem 0;
    text-decoration: none;
    text-overflow: ellipsis;
    transition: border-color 0.2s ease-in-out;
    white-space: nowrap;

    &:hover {
        border-color: #ffde59;
        color: #555;
    }

    @media (max-width: 576px) {
        border-bottom-width: 3px;
        padding: 0.0625rem 0;
    }
`;

const BreadcrumbText = styled.span`
    font-weight: 600;
`;

const ActionButtons = styled.div`
    align-items: center;
    display: flex;
    flex-shrink: 0;
    gap: 0.5rem;
`;

interface BreadcrumbItem {
    label: string;
    path?: string;
}

interface BreadcrumbProps {
    items?: BreadcrumbItem[];
    separator?: string;
    actionButtons?: React.ReactNode;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ 
    items = [], 
    separator = '/',
    actionButtons 
}) => {
    return (
        <BreadcrumbContainer aria-label="Breadcrumb">            
            <BreadcrumbContent>
                <BreadcrumbList>
                    {items.map((item, index) => (
                        <BreadcrumbItem 
                            key={index}
                            data-separator={separator}
                        >
                            {index < items.length - 1 && item.path ? (
                                <BreadcrumbLink to={item.path}>
                                    {item.label}
                                </BreadcrumbLink>
                                ) : (
                                <BreadcrumbText aria-current="page">
                                    {item.label}
                                </BreadcrumbText>
                            )}
                        </BreadcrumbItem>
                    ))}
                </BreadcrumbList>
            </BreadcrumbContent>

            <ActionButtons>
                {actionButtons}
            </ActionButtons>
        </BreadcrumbContainer>
    );
};

export default Breadcrumb;