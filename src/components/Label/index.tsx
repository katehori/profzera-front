import styled from "styled-components";

const LabelText = styled.label`
    font-size: 12px;
    margin-bottom: 8px;
`

const Required = styled.span`
    color: #ffde59;
`

interface LabelProps {
    children: React.ReactNode;
    htmlFor: string;
    required?: boolean;
}

const Label: React.FC<LabelProps> = ({ 
    htmlFor, 
    children, 
    required = false
}) => {
    return (
        <LabelText htmlFor={htmlFor}>
            {children}
            {required && <Required> *</Required>}
        </LabelText>
    );
};

export default Label;