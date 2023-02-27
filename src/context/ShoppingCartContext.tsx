import { createContext, useContext, ReactNode, useState } from 'react'
import { ShoppingCart } from '../components/ShoppingCart'
import { useSessionStorage } from '../hooks/useSessionStorage'
import { StoreItemsProps } from '../components/StoreItem'
import storeItems from '../data/items.json'




type ShoppingCartProviderProps = {
    children: ReactNode
}

export type CartItemT = {
    id: number | string
    quantity: number
}

type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number | string) => number
    increaseItemQuantity: (id: number | string) => void
    decreaseItemQuantity: (id: number | string) => void
    removeFromCart: (id: number | string) => void
    getItem: (name: string) => StoreItemsProps
    cartQuantity: number
    cartItems: CartItemT[]
    resetCart: () => CartItemT[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useSessionStorage<CartItemT[]>
        ('callAnything', [])
    const [isOpen, setIsOpen] = useState(false)

    const cartQuantity: number = cartItems.reduce((quantity: number, item: CartItemT) => item.quantity + quantity, 0)

    function openCart() {
        setIsOpen(true)
    }

    function closeCart() {
        setIsOpen(false)
    }

    function getItem(name: string) {
        return storeItems.find(e => e.name === name)!
    }

    function getItemQuantity(id: number | string) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseItemQuantity(id: number | string) {
        setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id) == null) {
                return [...currentItems, { id, quantity: 1 }]
            } else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity++ }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseItemQuantity(id: number | string) {
        setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id)?.quantity === 1) {
                return currentItems.filter(item => item.id !== id)
            } else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity-- }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: number | string) {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id)
        })
    }

    function resetCart(): CartItemT[] {
        setCartItems([])
        return [];
    }


    return (
        <ShoppingCartContext.Provider
            value={{
                getItemQuantity,
                increaseItemQuantity,
                decreaseItemQuantity,
                removeFromCart,
                openCart,
                closeCart,
                cartItems,
                cartQuantity,
                getItem,
                resetCart
            }}>
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
}