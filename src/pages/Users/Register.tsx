import { ErrorMessage, Formik } from 'formik';
import { RegisterFormValues } from '../../reducers/types';
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
import Select from '../../components/Select';
import UserContainer from '../../components/User/Container';
import UserForm from '../../components/User/Form';

const userTypeOptions = [
	{ value: 0, label: 'Administrador' },
	{ value: 1, label: 'Professor' },
	{ value: 2, label: 'Aluno' }
];

const validationSchema = Yup.object({
	type: Yup.number().min(0, 'Tipo de usuário é obrigatório'),
	username: Yup.string().required('Nome de usuário é obrigatório'),
	password: Yup.string()
		.min(8, 'A senha deve possuir pelo menos 8 caracteres')
		.required('Senha é obrigatória'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
		.required('Confirmar senha é obrigatório')
})

function Register() {
	const navigate = useNavigate();

	const createUser = (values: RegisterFormValues) => {
		const { confirmPassword, ...userData } = values;
		console.log(userData);

		api.post('/users', userData)
			.then(() => {
				alert('Usuário criado com sucesso');
				navigate('/login'); 
			})
			.catch((error) => {
				alert('Erro ao criar usuário. Tente novamente.');
			})
	}

	return (
		<>
			<UserContainer>
				<Formik
					onSubmit={createUser}
					initialValues={{
						type: -1,
						username: '',
						password: '',
						confirmPassword: ''
					}}
					validationSchema={validationSchema}
				>
          			{({ handleSubmit, isSubmitting }) => (
						<UserForm onSubmit={handleSubmit}>
							<Heading>
								Criar usuário
							</Heading>

							<Fieldset>
								<Label htmlFor="type" required>
									Tipo de usuário
								</Label>
								<Select
									id="type"
									name="type"
    								options={userTypeOptions}
									placeholder="Selecione o tipo de usuário"
  									disabled={isSubmitting}
								/>
								<ErrorMessage
									name="type"
									component={ErrorText}
								/>
							</Fieldset>

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
									type="password"
									placeholder="Insira a senha"
  									disabled={isSubmitting}
								/>
								<ErrorMessage
									name="password"
									component={ErrorText}
								/>
							</Fieldset>

							<Fieldset>
								<Label htmlFor="confirmPassword" required>
									Confirme sua senha
								</Label>
								<Input
									id="confirmPassword"
									name="confirmPassword"
									type="password"
									placeholder="Confirme a sua senha"
  									disabled={isSubmitting}
								/>
								<ErrorMessage
									name="confirmPassword"
									component={ErrorText}
								/>
							</Fieldset>

							<Button
								type="submit"
								disabled={isSubmitting}
								fullWidth
							>
								{isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
							</Button>

							<div>Já tem conta? <CustomLink to="/login">Entrar</CustomLink></div>
						</UserForm>
          			)}
				</Formik>
			</UserContainer>
		</>
	)
}

export default Register;
