import React from 'react'
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
    return (
        <div>

        </div>
    )
}
