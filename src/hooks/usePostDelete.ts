import { useState } from 'react';
import api from '../api';

interface UsePostDeleteProps {
	onSuccess?: (postId: number | string) => void;
	onError?: (error: any) => void;
	onLoading?: (loading: boolean) => void;
}

interface UsePostDeleteReturn {
	deletePost: (postId: number | string, postTitle?: string) => Promise<boolean>;
	isDeleting: boolean;
}

export const usePostDelete = ({ 
	onSuccess, 
	onError,
	onLoading
}: UsePostDeleteProps = {}): UsePostDeleteReturn => {
	const [isDeleting, setIsDeleting] = useState(false);

	const deletePost = async (postId: number | string, postTitle?: string): Promise<boolean> => {
		const confirmMessage = postTitle 
			? `Tem certeza que deseja excluir a publicação "${postTitle}"? Esta ação não pode ser desfeita.`
			: 'Tem certeza que deseja excluir esta publicação? Esta ação não pode ser desfeita.';

		if (!window.confirm(confirmMessage)) {
			return false;
		}

		setIsDeleting(true);

		if (onLoading) onLoading(true);

		try {
			await api.delete(`/posts/${postId}`);
			
			alert('Publicação excluída com sucesso!');
			
			if (onSuccess) onSuccess(postId);
			
			return true;
		} catch (error) {
			alert('Erro ao excluir publicação. Tente novamente.');
			
			if (onError) onError(error);
			
			return false;
		} finally {
			setIsDeleting(false);

			if (onLoading) onLoading(false);
		}
	};

  return {
    deletePost,
    isDeleting
  };
};