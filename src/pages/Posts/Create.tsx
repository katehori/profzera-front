import { ErrorMessage, Formik } from 'formik';
import { PostFormValues } from '../../reducers/types';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import api from '../../api';
import Author from '../../components/Input/Author';
import Breadcrumb from '../../components/Breadcrumb';
import Button, { ButtonGroup } from '../../components/Button';
import ErrorText from '../../components/ErrorText'
import Fieldset from '../../components/Fieldset';
import Heading from '../../components/Heading';
import Input from '../../components/Input';
import Label from '../../components/Label';
import PostContainer from '../../components/Post/Container';
import PostForm from '../../components/Post/Form';
import Textarea from '../../components/Textarea';

const validationSchema = Yup.object({
	title: Yup.string().required('Título é obrigatório'),
	content: Yup.string().required('Conteúdo é obrigatório')
})

const CreatePost: React.FC = () => {
	const navigate = useNavigate();
	
	const { user } = useAuth();

	const initialValues = {
		title: '',
		content: ''
	};

	const handleSubmit = (values: PostFormValues, { resetForm }: { resetForm: () => void }) => {
		const postData = {
			...values,
			userId: user?.id
		};

		api.post('/posts', postData)
			.then(() => {
				alert('Publicação criada com sucesso');
				resetForm();
				navigate('/posts');
			})
			.catch(() => {
				alert('Erro ao criar publicação');
			});
	};

	return (
		<>
			<PostContainer>
				<Breadcrumb 
					items={[
						{ label: 'Publicações', path: '/posts' },
						{ label: `Criando` }
					]}
					separator=">"
				/>

				<Heading>
					Criar publicação
				</Heading>

				<Formik
					onSubmit={handleSubmit}
					initialValues={initialValues}
					validationSchema={validationSchema}
				>
				{({ handleSubmit, isSubmitting }) => (
					<PostForm onSubmit={handleSubmit}>
						<Fieldset>
							<Label htmlFor="title" required>
								Título
							</Label>
							<Input
								id="title"
								name="title"
								placeholder="Insira o título"
								disabled={isSubmitting}
							/>
							<ErrorMessage
								name="title"
								component={ErrorText}
							/>
						</Fieldset>

						<Fieldset>
							<Label htmlFor="content" required>
								Conteúdo
							</Label>
							<Textarea
								id="content"
								name="content"
								placeholder="Insira o conteúdo"
								rows={5}
								disabled={isSubmitting}
							/>
							<ErrorMessage
								name="content"
								component={ErrorText}
							/>
						</Fieldset>

						<Author />

						<ButtonGroup>
							<Button
								variant="primary"
								onClick={() => navigate(-1)}
							>
								Cancelar
							</Button>
							
							<Button
								type="submit"
								variant="primary"
								disabled={isSubmitting}
							>
								{isSubmitting ? 'Criando...' : 'Criar'}
							</Button>
						</ButtonGroup>
					</PostForm>
				)}
				</Formik>
			</PostContainer>
		</>
	)
}

export default CreatePost;
