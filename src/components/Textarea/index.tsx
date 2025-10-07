import { Field } from "formik";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
	border-radius: 5px;
	border: 1px solid #ccc;
	min-height: 100px;
	padding: 8px;
	resize: vertical;
	width: 100%;
  	transition: all 0.2s ease-in-out;
    
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