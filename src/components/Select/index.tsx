import { Field } from 'formik';
import styled from 'styled-components';


const StyledSelect = styled(Field)`
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 8px;
    transition: border-color 0.2s ease-in-out;
    width: 100%;
    
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
`;

interface SelectOption {
    label: string;
    value: number | string;
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
    return (
        <StyledSelect
            as="select"
            id={id}
            name={name}
            disabled={disabled}
        >
            <option value="">{placeholder}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </StyledSelect>
    );
};

export default Select;
