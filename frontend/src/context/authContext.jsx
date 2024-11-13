import { useContext, createContext, useReducer, useEffect } from 'react'; 

export const initialState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    role: localStorage.getItem('role') || null,
    token: localStorage.getItem('token') || null,
};

export const AuthContext = createContext(initialState);

export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                role: null,
                token: null,
            };
        
        case "LOGIN_SUCCESS":
            console.log('New State after LOGIN_SUCCESS:', action.payload);
            return {
                user: action.payload.user,
                token: action.payload.token,
                role: action.payload.role,
            };

        case "LOGOUT":
            return {
                user: null,
                role: null,
                token: null,
            };
        
        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
        localStorage.setItem("token", state.token);
        localStorage.setItem("role", state.role);
    }, [state.user, state.token, state.role]); 

    return (
        <AuthContext.Provider value={{ user: state.user, token: state.token, role: state.role, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);