import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { Product, WishlistContextType } from '@/constants/types'
import { dummyCart, dummyWishlist } from '@/assets/assets'

export type CartItem ={
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  price: number;
  size: string;
}

export type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product,  size: string) => Promise<void>;
  removeFromCart: (itemId: string, size: string) => Promise<void>;
  updateQuantity: (itemId: string, size: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  cartTotal: number;
  cartCount: number;
  isLoading: boolean;

  
}


const CartContext = createContext<CartContextType | undefined>(undefined) 

export const CartProvider({ children } : { children:ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [cartTotal, setCartTotal] = useState(0);


  const fetchCart = async () => {
    setIsLoading(true);
    const serverCart = dummyCart;
    const mappedCartItems: CartItem[]= serverCart.items.map((item: any) => ({
      id: item.product._id,
      productId: item.product._id,
      product: item.product,
      quantity: item.quantity,
      price: item.price,
      size: item?.size || 'M',
    }));
    setCartItems(mappedCartItems);
    setCartTotal(serverCart.totalAmount);
    setIsLoading(false);
  }

  const addToCart = async (product: Product, size: string) => {

  }
  const removeFromCart = async (itemId: string, size: string) => {

  }
  const updateQuantity = async (itemId: string, size: string, quantity: number) => {

  }
  const clearCart = async () => {

  }
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
   
  useEffect(() => {
    fetchCart();
  }, []);

  return(
    <CartProvider.Provider value={{addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart, 
      cartItems, 
      cartTotal,
      itemCount, 
      isLoading
  }}>
      {children}
    </CartProvider.Provider>
  )
}

const useCart = () => {
    const context = useContext(CartContext)
    if(context === undefined){
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}

export default useCart