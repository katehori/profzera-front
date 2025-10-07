import { PostState, PostAction } from './types';

const initialState: PostState = {
    posts: [],
    loading: false,
    error: null
};

const postReducer = (state: PostState, action: PostAction): PostState => {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: null
            };
        case 'CREATE_POST':
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            };
        case 'UPDATE_POST':
            return {
                ...state,
                posts: state.posts.map(post => 
                post.id === action.payload.id ? action.payload : post
                )
            };
        case 'DELETE_POST':
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case 'CLEAR_ERROR':
            return {
                ...state,
                error: null
            };
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload
            };
        case 'RESET_STATE':
            return initialState;
        default:
            return state;
    }
};

export default postReducer;
