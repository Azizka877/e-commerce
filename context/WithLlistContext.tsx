import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { Product, WishlistContextType } from '@/constants/types'
import { dummyWishlist } from '@/assets/assets'

const WishlistContext = createContext<WishlistContextType | undefined>(undefined) 

export const WishlistProvider({ children } : { children:ReactNode }) => {
 const [ wishlist , setWishlist ] = useState<Product[]>([])
 const [loading, setIsloading ] = useState(false)


 const fetchList = async () => {
    setIsloading(true)
    setWishlist(dummyWishlist)
    setIsloading(false)
 }

 const toggleWishlist = (product:Product) => {
   const exists = wishlist.find(item => item._id === product._id)
   if(exists){
    setWishlist(wishlist.filter(item => item._id !== product._id))
   }else{
    setWishlist([...wishlist, product])
   }
 }
 const isInWishlist = (productId:string) => {
   return wishlist.some(p => p._id === productId)
   
 }



 useEffect(() => {
    fetchList()
 }, [])
  

  return(
    <WishlistProvider.Provider value={{ wishlist, loading , toggleWishlist, isInWishlist }}>
      {children}
    </WishlistProvider.Provider>
  )
}

const useWishlist = () => {
    const context = useContext(WishlistContext)
    if(context === undefined){
        throw new Error('useWishlist must be used within a WishlistProvider')
    }
    return context
}

export default useWishlist