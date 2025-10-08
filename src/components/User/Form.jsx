import styled from "styled-components";
import { Form as FormikForm } from 'formik'

const UserForm = styled(FormikForm)`    
    border-radius: 8px;
    border: 1px solid hsla(220, 20%, 80%, 0.4);
    padding: 2rem;
    width: 100%;
    background: #fff;

    @media (max-width: 1024px) {
        border-radius: 7px;
        padding: 1.75rem;
    }

    @media (max-width: 768px) {
        border-radius: 6px;
        padding: 1.5rem;
    }

    @media (max-width: 576px) {
        border-radius: 5px;
        border-width: 1px;
        padding: 1.25rem;
    }

    @media (max-width: 480px) {
        border-radius: 4px;
        border: 1px solid hsla(220, 20%, 85%, 0.5);
        box-sizing: border-box;
        max-width: 100vw;
        padding: 1rem;
    }

    @media (max-width: 320px) {
        border-radius: 3px;
        border-width: 0.5px;
        padding: 0.75rem;
    }
` 

export default UserForm;