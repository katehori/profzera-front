import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

interface BreadcrumbItem {
    label: string;
    path?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    separator?: string;
    actionButtons?: React.ReactNode;
}

const BreadcrumbContainer = styled.nav`
    align-items: center;
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    padding: 1rem 0;
    gap: 20px;
`;

const BreadcrumbContent = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
`;

const BreadcrumbList = styled.ol`
    align-items: center;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const BreadcrumbItem = styled.li`
    align-items: center;
    display: flex;
    
    &:not(:last-child)::after {
        color: #999;
        content: '${props => props['data-separator']}';
        margin: 0 0.5rem;
    }
`;

const BreadcrumbLink = styled(Link)`
    text-decoration: none;
    border-bottom: 4px solid rgba(255, 222, 89, 0.4);
    transition: border-color 0.2s ease-in-out;

    &:hover {
        border-color: #ffde59;
    }
`;

const BreadcrumbText = styled.span`
    font-weight: 600;
`;

const ActionButtons = styled.div`
    align-items: center;
    display: flex;
    flex-shrink: 0;
    gap: 1rem;
`;

const Breadcrumb: React.FC<BreadcrumbProps> = ({ 
    items, 
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