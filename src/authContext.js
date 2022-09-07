import { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
    //Authentication
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        return signOut(auth);
    };

    // Cart
    const [cartItems, setCartItems] = useState([]);
    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

    function getItemQuantity(product) {
        return cartItems.find((item) => item.id === product.id)?.quantity || 0;
    }
    const onIncrease = (product) => {
        const exist = cartItems.find((item) => item.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((item) => (item.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : item)),
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };
    const onDecrease = (product) => {
        const exist = cartItems.find((item) => item.id === product.id);
        if (exist.quantity === 1) {
            setCartItems(cartItems.filter((item) => item.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((item) => (item.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : item)),
            );
        }
    };
    function removeFromCart(product) {
        setCartItems((currItems) => {
            return currItems.filter((item) => item.id !== product.id);
        });
    }

    // open/close cart
    const [isOpen, setIsOpen] = useState(false);
    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    //close when click outside
    function useOutsideClose(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    closeCart();
                }
            }
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref]);
    }
    //filter
    function changePrice(min, max) {
        setPriceMin(min);
        setPriceMax(max);
    }
    const [priceMin, setPriceMin] = useState(0);
    const [priceMax, setPriceMax] = useState(0);
    const [rating, setRating] = useState(0);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);
    const value = {
        createUser,
        user,
        logout,
        login,
        onIncrease,
        onDecrease,
        getItemQuantity,
        cartQuantity,
        cartItems,
        setCartItems,
        removeFromCart,
        isOpen,
        openCart,
        useOutsideClose,
        closeCart,
        changePrice,
        priceMin,
        priceMax,
        setPriceMax,
        setPriceMin,
        rating,
        setRating,
    };
    return <UserContext.Provider value={value}>{!loading && children}</UserContext.Provider>;
};

export const useAuth = () => {
    return useContext(UserContext);
};
