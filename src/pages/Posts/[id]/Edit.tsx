import { ErrorMessage, Formik } from 'formik';
import { PostFormValues } from '../../../reducers/types';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import api from '../../../api';
import Breadcrumb from '../../../components/Breadcrumb';
import Button from '../../../components/Button';
import ErrorText from '../../../components/ErrorText'
import Fieldset from '../../../components/Fieldset';
import GlobalStyles from '../../../components/GlobalStyles';
import Heading from '../../../components/Heading';
import Input from '../../../components/Input';
import Label from '../../../components/Label';
import PostContainer from '../../../components/Post/Container';
import PostForm from '../../../components/Post/Form';
import Textarea from '../../../components/Textarea';

const validationSchema = Yup.object({
    title: Yup.string().required('Título é obrigatório'),
    content: Yup.string().required('Conteúdo é obrigatório'),
    username: Yup.string().required('Autor é obrigatório'),
})

const EditPost: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();
	
	const [initialValues, setInitialValues] = useState<PostFormValues>({
		title: '',
		content: '',
		username: ''
	});
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

  	useEffect(() => {
		if (id) {
			setLoading(true);
			setError(null);
			api.get(`/posts/${id}`)
				.then(response => {
					setInitialValues({
						title: response.data.title || '',
						content: response.data.content || '',
						username: response.data.username || ''
					});
				})
				.catch(() => {
					setError('Erro ao carregar publicação');
				})
				.finally(() => {
					setLoading(false);
				});
		} else {
			setLoading(false);
		}
  	}, [id]);

  	const handleSubmit = (values: PostFormValues) => {
		if (!id) {
			alert('ID da publicação não encontrado');
			return;
		}

		api.put(`/posts/${id}`, values)
			.then(() => {
				alert('Publicação editada com sucesso');
				navigate(`/posts/${id}`);
			})
			.catch(() => {
				setError('Erro ao editar publicação');
			});
  	};

  	if (loading) return <div>Carregando...</div>;

	if (error) return <div>{error}</div>;

  	return (
    <>
		<PostContainer>
			<Breadcrumb 
				items={[
					{ label: 'Publicações', path: '/posts' },
					{ label: `Editando: ${id}` }
				]}
				separator=">"
			/>

			<Heading>
				Editando a publicação: {id}
			</Heading>

			<Formik
				onSubmit={handleSubmit}
				initialValues={initialValues}
				validationSchema={validationSchema}
				enableReinitialize 
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
								rows={8}
								disabled={isSubmitting}
							/>
							<ErrorMessage
								name="content"
								component={ErrorText}
							/>
						</Fieldset>

						<Fieldset>
							<Label htmlFor="username" required>
								Autor
							</Label>
							<Input
								id="username"
								name="username"
								placeholder="Insira o autor"
								disabled={isSubmitting}
							/>
							<ErrorMessage
								name="username"
								component={ErrorText}
							/>
						</Fieldset>

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
							{isSubmitting ? 'Editando...' : 'Editar'}
						</Button>
					</PostForm>
				)}
			</Formik>
		</PostContainer>
    </>
  )
}

export default EditPost;
