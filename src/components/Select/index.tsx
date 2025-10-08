import { Field, useFormikContext } from 'formik';
import styled from 'styled-components';

const StyledSelect = styled(Field)`
    background-color: #fff;
    border-radius: 8px;
    border: 1px solid #ccc;
    cursor: pointer;
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

    @media (max-width: 768px) {
        border-radius: 6px;
        font-size: 0.95rem;
        padding: 0.875rem;
    }
    
    @media (max-width: 480px) {
        border-radius: 5px;
        font-size: 16px; /* Previne zoom em iOS */
        min-height: 48px;
        padding: 0.75rem;
    }
    
    @media (max-width: 320px) {
        border-radius: 4px;
        font-size: 14px;
        padding: 0.625rem;
    }
`;

interface SelectOption {
    label: string;
    value: number;
}

interface SelectProps {
    id: string;
    name: string;
    options: SelectOption[];
    placeholder?: string;
    disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
    id,
    name,
    options,
    placeholder = "Selecione...",
    disabled = false
}) => {
    const { setFieldValue, values } = useFormikContext();

    const value = values[name];
    return (
        <StyledSelect
            as="select"
            id={id}
            name={name}
            disabled={disabled}
            onChange={e => setFieldValue(name, e.target.value)}
            value={value}
        >
            <option value={-1} disabled hidden>{placeholder}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </StyledSelect>
    );
};

export default Select;
