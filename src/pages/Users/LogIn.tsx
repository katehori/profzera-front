import { ErrorMessage, Formik } from 'formik';
import { LoginFormValues } from '../../reducers/types';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import api from '../../api';
import Button from '../../components/Button';
import CustomLink from '../../components/CustomLink';
import ErrorText from '../../components/ErrorText'
import Fieldset from '../../components/Fieldset';
import Heading from '../../components/Heading';
import Input from '../../components/Input';
import Label from '../../components/Label';
import UserContainer from '../../components/User/Container';
import UserForm from '../../components/User/Form';

const validationSchema = Yup.object({
	username: Yup.string().required('Nome de usuário é obrigatório'),
	password: Yup.string()
		.min(8, 'A senha deve possuir pelo menos 8 caracteres')
		.required('Senha é obrigatória')
})

function LogIn() {
	const navigate = useNavigate();
	const { login } = useAuth();

	const handleLogin = (values: LoginFormValues) => {
		api.post('/users/login', values)
			.then((response) => {
        		const userData = response.data;
				login(userData);
				alert('Conta acessada com sucesso');
				navigate('/posts');
			})
			.catch((error) => {
				alert('Erro ao acessar a conta. Verifique suas credenciais.');
			});
	};

	return (
		<>
			<UserContainer>
				<Formik
					onSubmit={handleLogin}
					initialValues={{
						username: '',
						password: ''
					}}
					validationSchema={validationSchema}
				>
          			{({ handleSubmit, isSubmitting }) => (
						<UserForm onSubmit={handleSubmit}>
							<Heading>
								Entrar
							</Heading>

							<Fieldset>
                				<Label htmlFor="username" required>
									Nome do usuário
								</Label>
								<Input
									id="username"
									name="username"
									placeholder="Insira o nome do usuário"
  									disabled={isSubmitting}
								/>
								<ErrorMessage
									name="username"
									component={ErrorText}
								/>
							</Fieldset>

							<Fieldset>
								<Label htmlFor="password" required>
									Senha
								</Label>
								<Input
									id="password"
									name="password"
									placeholder="Insira a senha"
									type="password"
  									disabled={isSubmitting}
								/>
								<ErrorMessage
									name="password"
									component={ErrorText}
								/>
							</Fieldset>

							<Button
								type="submit"
								variant="primary"
								disabled={isSubmitting}
								fullWidth
							>
								{isSubmitting ? 'Entrando...' : 'Entrar'}
							</Button>

							<div>Não tem uma conta? <CustomLink to="/register">Cadastre-se</CustomLink></div>
						</UserForm>
					)}
				</Formik>
			</UserContainer>
		</>
	)
}

export default LogIn;
