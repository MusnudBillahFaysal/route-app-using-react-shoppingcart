import { createContext, useEffect, useContext, useReducer } from 'react';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

const userReducer = (state, action) => {
  switch (action.type) {
    case 'REGISTER_USER':
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case 'ADD_TO_CART':
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case 'REMOVE_FROM_CART':
      const updatedCartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      return { ...state, cartItems: updatedCartItems };
    case 'LOGIN': // Add this case to handle login
      return { ...state, isLoggedIn: action.payload };
    // ... other cases ...
    default:
      return state;
  }
};

// const userReducer = (state, action) => {
//   switch (action.type) {
//     case 'REGISTER_USER':
//       return {
//         ...state,
//         users: [...state.users, action.payload],
//       };
//     case 'ADD_TO_CART':
//       return { ...state, cartItems: [...state.cartItems, action.payload] };
//     case 'REMOVE_FROM_CART':
//       const updatedCartItems = state.cartItems.filter(
//         (item) => item._id !== action.payload._id
//       );
//       return { ...state, cartItems: updatedCartItems };
//     // ... other cases ...
//     default:
//       return state;
//   }
// };
export const UserProvider = ({ children }) => {
  const storedState = JSON.parse(localStorage.getItem('userState')) || {
    users: [],
    cartItems: [],
    isLoggedIn: false, // Add the isLoggedIn property
  };

  const [state, dispatch] = useReducer(userReducer, storedState);

  // Persist state changes to local storage
  useEffect(() => {
    localStorage.setItem('userState', JSON.stringify(state));
  }, [state]);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
