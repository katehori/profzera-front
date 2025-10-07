import styled from "styled-components";
import { Form as FormikForm } from 'formik'

const UserForm = styled(FormikForm)`    
    border-radius: 8px;
    border: 1px solid hsla(220, 20%, 80%, 0.4);
    box-shadow: rgba(9, 11, 17, 0.05) 0px 5px 15px 0px, rgba(19, 23, 32, 0.05) 0px 15px 35px -5px;
    padding: 2rem;
    transition: 100ms;
    width: 100%;
` 

export default UserForm;