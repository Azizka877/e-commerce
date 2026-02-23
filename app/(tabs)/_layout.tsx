import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/constants'

export default function TabLayout() {
  return (
    <Tabs 
    screenOptions={{
        headerShown:false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarShowLabel: false,
        tabBarStyle: {
            backgroundColor:'#fff',
            borderTopColor: '#F0F0F0',
            borderTopWidth: 1,
            height: 56,
            paddingTop:8
        }
    }}
    >
        <Tabs.Screen name="index" options={{ 
            title:"Home",
            tabBarIcon: ({ color, size, focused})=><Ionicons name={focused? 'home' : 'home-outline'} color={color} size={size} />
        }}
          />
        
        <Tabs.Screen name="cart" options={{ 
            title:"Cart",
            tabBarIcon: ({ color, size, focused })=><Ionicons name={focused? 'cart' : 'cart-outline'} color={color} size={size} />
        }}
          />
        
        <Tabs.Screen name="favorites" options={{ 
            title:"Favorites",
            tabBarIcon: ({ color, size, focused })=><Ionicons name={focused? 'heart' : 'heart-outline'} color={color} size={size} />
        }}
          />
        
        <Tabs.Screen name="profile" options={{ 
            title:"Profile",
            tabBarIcon: ({ color, size, focused })=><Ionicons name={focused? 'person' : 'person-outline'} color={color} size={size} />
        }}
          />
      
    </Tabs>
  )
}