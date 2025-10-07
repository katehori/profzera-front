import { Field } from "formik";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
	border-radius: 8px;
	min-height: 100px;
	resize: vertical;
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
`;

interface TextAreaProps {
    id: string;
	name: string;
	placeholder?: string;
	rows?: number;
    disabled?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  	id,
	name,
	placeholder = "Insira o texto...",
	rows = 8,
  	disabled = false
}) => {
	return (
		<Field
			id={name}
			as={StyledTextarea}
			name={name}
			placeholder={placeholder}
			rows={rows}
      		disabled={disabled}
		/>
	);
};

export default TextArea;