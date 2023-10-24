import { createSlice, current } from "@reduxjs/toolkit";

const defaultCartValue={
    cartItems:[],
    numItemsInCart:0,
    cartTotal:0,
    shipping:500,
    tax:0,
    orderTotal:0,
}

export const CartSlice = createSlice({
    name:'cart',
    initialState: {
        value:defaultCartValue,
    },
    reducers:{
        addItem:(state,action)=>{
            let cartList = state.value
            let isItemHere =cartList.cartItems.some((item)=>{
                console.log(current(item))
              return  item.cartId == action.payload.cartId
            })
            if(isItemHere){
                cartList.cartItems.filter((item)=>{
                    if(item.cartId == action.payload.cartId){
                        item.amount+=action.payload.amount
                    }
                })
            }else{
                console.log(isItemHere)
                cartList.cartItems.push(action.payload)
            }
                cartList.cartTotal=0
                cartList.numItemsInCart=0
                cartList.cartItems.map((item)=>{
                    cartList.numItemsInCart+=item.amount
                    cartList.cartTotal+=(item.price* item.amount)
                })
            console.log(action.payload)
            console.log(current(state.value))
            // state.value.defaultValue.cartItems=[...cartItems,action.payload]
        },
        clearCart:(state)=>{
            state.value= defaultCartValue
        },
        removeItem:(state,action)=>{
            let cartList = state.value
                cartList.cartTotal=0
                cartList.numItemsInCart=0   
                cartList.cartItems = cartList.cartItems.filter((item)=>{
                if(item.cartId!==action.payload.cartId){
                    cartList.numItemsInCart+=item.amount
                    cartList.cartTotal+=(item.price* item.amount)
                    return item
                }
                // else{
                //     return item
                // }
            })
            // console.log(action.payload)

        },
        editItem:(state,action)=>{
            let cartList = state.value
            cartList.cartTotal=0
            cartList.numItemsInCart=0
            cartList.cartItems.filter((items)=>{
                if(items.cartId==action.payload.cartId){
                    items.amount=action.payload.amount
                }
            })
            cartList.cartItems.map((item)=>{
                    cartList.numItemsInCart+=item.amount
                    cartList.cartTotal+=(item.price* item.amount)
                })
            console.log(action.payload)
            
        },
    }
})

export const {addItem,clearCart,removeItem,editItem} = CartSlice.actions

export default CartSlice.reducer