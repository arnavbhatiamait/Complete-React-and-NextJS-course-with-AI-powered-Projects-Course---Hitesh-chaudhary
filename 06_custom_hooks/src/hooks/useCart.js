import React, { useMemo } from 'react'
import { useState, useEffect } from 'react'

export default function useCart() {

    const [cart, setCart] = useState(() => {
        try {
            const savedCart = localStorage.getItem('cart');
            return savedCart ? JSON.parse(savedCart) : [];
        }
        catch (error) {
            console.error("Error loading cart from localStorage", error);
            return [];
        }
    });


    // ! use effect return is used for cleanup and to avoid memory leaks when the component unmounts or when the dependencies change. It allows you to perform any necessary cleanup tasks, such as canceling timers, aborting network requests, or removing event listeners, ensuring that your application remains efficient and free of memory leaks.
    // ~ LIKE TO STOP THE DATABASE WE CAN USE DISCONNECT IN THE CLEANUP FUNCTION OF USE EFFECT
    useEffect(() => {
        try {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        catch (error) {
            console.error("Failed to save cart to localStorage", error);
        }
    }, [cart])

    // ! sync across tabs -> only one time

    useEffect(() => {
        const handleStorageChange = (e) => {
            if (e.key === 'cart') {
                try {
                    const newCart = JSON.parse(e.newValue || '[]');
                    setCart(newCart);
                }
                catch (error) {
                    console.error("Error parsing cart from localStorage", error);
                }
            }
        }
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);

    }
        , [])
    const addToCart = (product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return currentCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity < 1) return
        setCart(prevCart => prevCart.map(item => item.id === productId ? { ...item, quantity } : item));
    }

    // ! this is not react 19 or later
    const total = useMemo(() => {
        return Number(cart.reduce((sum, item) => {
            const itemTotal = item.price * (item.quantity || 0);
            return sum + itemTotal;
        }, 0));
    }, [cart])



    return (
        { cart, addToCart, removeFromCart, updateQuantity, total, }
    )
}
