export interface Post {
    id: number;
    title: string;
    content: string;
    username: string;
    createdAt?: Date;
}

export interface PostFormValues {
    title: string;
    content: string;
}

export interface LoginFormValues {
	password: string;
	username: string;
}

export interface RegisterFormValues {
    confirmPassword: string;
    password: string;
    type: string;
    username: string;
}

export interface PostState {
    posts: Post[];
    loading: boolean;
    error: string | null;
}

export type PostAction = 
    | { type: 'SET_POSTS'; payload: Post[] }
    | { type: 'CREATE_POST'; payload: Post }
    | { type: 'UPDATE_POST'; payload: Post }
    | { type: 'DELETE_POST'; payload: number }
    | { type: 'SET_ERROR'; payload: string }
    | { type: 'CLEAR_ERROR' }
    | { type: 'SET_LOADING'; payload: boolean }
    | { type: 'RESET_STATE' };