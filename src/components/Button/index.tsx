import styled from "styled-components";

interface StyledButtonProps {
    $variant?: 'primary' | 'danger' | 'success';
    $size?: 'small' | 'medium' | 'large';
    $disabled?: boolean;
    $fullWidth?: boolean;
}


const StyledButton = styled.button<StyledButtonProps>`
    align-items: center;
    border-radius: 8px;
    border: none;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    justify-content: center;
    gap: 0.5rem;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    width: ${props => props.$fullWidth ? '100%' : 'auto'};

    ${props => {
        switch (props.$variant) {
            case 'danger':
                return `
                    background-color: #dc3545;

                    &:hover:not(:disabled) {
                        background-color: #c82333;
                    }

                    &:focus {
                        outline: none;
                        box-shadow: 0 0 0 2px rgba(220, 53, 69, 0.25);
                    }
                `;
            case 'success':
                return `
                    background-color: #28a745;

                    &:hover:not(:disabled) {
                        background-color: #218838;
                    }

                    &:focus {
                        outline: none;
                        box-shadow: 0 0 0 2px rgba(40, 167, 69, 0.25);
                    }
                `;
            case 'primary':
            default:
                return `
                    background-color: #004aad;

                    &:hover:not(:disabled) {
                        background-color: #003399;
                    }

                    &:focus {
                        outline: none;
                        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
                    }
                `;
            }
    }}

    ${props => {
        switch (props.$size) {
            case 'small':
                return `
                    padding: 6px 12px;
                    font-size: 0.875rem;
                `;
            case 'large':
                return `
                    padding: 12px 24px;
                    font-size: 1.125rem;
                `;
            case 'medium':
            default:
                return `
                    padding: 8px 16px;
                    font-size: 1rem;
                `;
        }
    }}

    &:disabled {
        background-color: #6c757d;
        cursor: not-allowed;
        opacity: 0.65;
    }
`;

interface ButtonGroupProps {
    $fullWidth?: boolean;
}

export const ButtonGroup = styled.div<ButtonGroupProps>`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    
    & > ${StyledButton} {
        flex: ${props => props.$fullWidth ? 1 : 'none'};
    }
`;

const ButtonContent = styled.span<{ $iconPosition: 'left' | 'right' }>`
    align-items: center;
    color: #fff;
    display: flex;
    flex-direction: ${props => props.$iconPosition === 'right' ? 'row-reverse' : 'row'};
    gap: 0.5rem;

    svg {
        color: inherit;
        fill: #fff;
    }
`;

interface ButtonProps {
    children: React.ReactNode;
    disabled?: boolean;
    fullWidth?: boolean;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    onClick?: () => void;
    size?: 'small' | 'medium' | 'large';
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'danger' | 'success';
}

const Button: React.FC<ButtonProps> = ({
    children,
    disabled = false,
    fullWidth = false,
    icon,
    iconPosition = 'left',
    onClick,
    size = 'medium',
    type = 'button',
    variant = 'primary'
}) => {
    return (
        <StyledButton
            disabled={disabled}
            $fullWidth={fullWidth}
            onClick={onClick}
            $size={size}
            type={type}
            $variant={variant}
        >
            <ButtonContent $iconPosition={iconPosition}>
                {icon}
                {children}
            </ButtonContent>
        </StyledButton>
    );
};

export default Button;