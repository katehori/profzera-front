import { Field } from "formik";
import styled from "styled-components";

const StyledInput = styled(Field)`
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 1rem;
    padding: 1rem;
    transition: all 0.2s ease-in-out;
    width: 100%;
  
    &:focus {
        border-color: #007bff;
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
        outline: none;
    }

    &:disabled {
        background-color: #f8f9fa;
        border-color: #e9ecef;
        color: #ccc;
        cursor: not-allowed;
        opacity: 0.8;
    }

    &:hover:not(:disabled) {
        border-color: #999;
    }
`

interface InputProps {
    children?: React.ReactNode;
    disabled?: boolean;
    id: string;
    name: string;
    placeholder?: string;
    type?: string;
    value?: string;
}

const Input: React.FC<InputProps> = ({
    children,
    disabled = false,
    id,
    name,
    placeholder = "Insira",
    type = "text",
    value
}) => {
    return (
        <StyledInput
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
        >
            {children}
        </StyledInput>
    );
};

export default Input;