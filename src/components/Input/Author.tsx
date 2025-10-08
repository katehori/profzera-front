
import { useAuth } from '../../hooks/useAuth';
import Fieldset from '../Fieldset';
import Input from '.';
import Label from '../Label';


const Author: React.FC = () => {
	const { user } = useAuth();

	return (
		<>
			<Fieldset>
                <Label htmlFor="username">
                    Autor
                </Label>
                <Input
                    id="username"
                    name="username"
                    value={user?.username || 'Carregando...'}
                    disabled
                />
            </Fieldset>
		</>
	)
}

export default Author;
