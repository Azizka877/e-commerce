//productCard.tsx

import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ProductCardProps } from '@/constants/types'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/constants'
import useWishlist from '@/context/WithLlistContext'

export default function ProductCard({product}: ProductCardProps) {
   const { toggleWishlist, isInWishlist} = useWishlist()

    const isLiked = isInWishlist(product._id)
  return (
    <Link href={`/product/${product._id}`} asChild>
      <TouchableOpacity className='w-[48%] mb-4 rounded-lg bg-white overflow-hidden'>
        <View className='relative h-56 w-full bg-gray-100 '>
            <Image source={{uri: product.images?.[0] ?? ''}} className='w-full h-full' resizeMode='cover' />
        {/* favorite icon */}
        <TouchableOpacity 
        className='absolute top-2 right-2 z-10 p-2 bg-white shadow-sm rounded-full' 
        onPress={()=>{(e: any)=>e.stopPropagation(); toggleWishlist(product)}}
        >
               <Ionicons name={isLiked ? 'heart' : 'heart-outline'} size={20} color={isLiked ? COLORS.accent : COLORS.primary} />

        </TouchableOpacity>
        {/* isFutured */}
        {product.isFeatured && (
            <View className='absolute top-2 left-2 px-2 py-1 bg-black rounded'>
                <Text className='text-white text-xs font-bold uppercase'>Featured </Text>
            </View>
            )}

        </View>
    {/* product Info */}
    <View className='p-3'>
       <View className='flex-row mb-1 items-center'>
        <Ionicons name='star' size={14} color='#FFD700' />
        <Text className='text-secondary text-xs ml-1'>4.6</Text>
       </View>
       <Text className='text-primary font-medium text-sm mb-1' numberOfLines={1}>{product.name}</Text>
       <View className='flex-row items-center'>
        <Text className='text-base text-primary font-bold'>${product.price.toFixed(2)}</Text>
        </View>
    </View>
      </TouchableOpacity>
    </Link>
  )
}