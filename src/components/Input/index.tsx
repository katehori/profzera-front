import { Field } from "formik";
import styled from "styled-components";

const StyledInput = styled(Field)`
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 1rem;
    padding: 8px;
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
    id: string;
    name: string;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
    id,
    name,
    type = "text",
    placeholder = "Insira",
    disabled = false
}) => {
    return (
        <StyledInput
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
        />
    );
};

export default Input;