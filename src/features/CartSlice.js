import { createSlice, current } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultCartValue={
    cartItems:[],
    numItemsInCart:0,
    cartTotal:0,
    shipping:5000,
    tax:600,
    orderTotal:0,
}
const getFromLocalStorage = ()=>{
    const state = JSON.parse(localStorage.getItem('cart')) || defaultCartValue
    // console.log(state)
    return state
}

export const CartSlice = createSlice({
    name:'cart',
    initialState: {
        value: getFromLocalStorage(),
    },
    reducers:{
        addItem:(state,action)=>{
            let cartList = state.value
            let isItemHere =cartList.cartItems.some((item)=>{
                // console.log(current(item))
              return  item.cartId == action.payload.cartId
            })
            if(isItemHere){
                cartList.cartItems.filter((item)=>{
                    if(item.cartId == action.payload.cartId){
                        item.amount+=action.payload.amount
                        
                    }
                })
            }else{
                // console.log(isItemHere)
                cartList.cartItems.push(action.payload)

            }
                cartList.cartTotal=0
                cartList.orderTotal=0
                cartList.numItemsInCart=0
                cartList.cartItems.map((item)=>{
                    console.log(item)
                    cartList.numItemsInCart=item.amount
                    cartList.cartTotal=(item.price* item.amount)
                    cartList.tax=(item.amount*defaultCartValue.tax)
                    cartList.orderTotal+=(cartList.cartTotal+cartList.tax+(cartList.shipping))

                })
            console.log(action.payload)
            console.log(current(state.value))
            // state.value.defaultValue.cartItems=[...cartItems,action.payload]
            CartSlice.caseReducers.calculateTotal(state)
           toast('Item Successfully Added',{
                            type:"success",
                            position:'top-center'
                        })

        },
        clearCart:(state)=>{
            state.value= defaultCartValue
            CartSlice.caseReducers.calculateTotal(state)

        },
        removeItem:(state,action)=>{
            let cartList = state.value
                cartList.cartTotal=0
                cartList.numItemsInCart=0  
                cartList.orderTotal=0
                cartList.cartItems = cartList.cartItems.filter((item)=>{
                if(item.cartId!==action.payload.cartId){
                    cartList.numItemsInCart=item.amount
                    cartList.cartTotal=(item.price* item.amount)
                    cartList.tax=(cartList.numItemsInCart*defaultCartValue.tax)
                    cartList.orderTotal+=(cartList.cartTotal+cartList.tax+(cartList.shipping))

                    return item
                }
                // else{
                //     return item
                // }
            })
            // console.log(action.payload) 
            CartSlice.caseReducers.calculateTotal(state)


        },
        editItem:(state,action)=>{
            let cartList = state.value
            cartList.cartTotal=0
            cartList.numItemsInCart=0
            cartList.orderTotal=0
            cartList.cartItems.filter((items)=>{
                if(items.cartId==action.payload.cartId){
                    items.amount=action.payload.amount
                }
            })
            cartList.cartItems.map((item)=>{
                    cartList.numItemsInCart+=item.amount
                    cartList.cartTotal=(item.price* item.amount)
                    cartList.tax=(item.amount*defaultCartValue.tax)
                    cartList.orderTotal=(cartList.cartTotal+cartList.tax+(cartList.shipping))
                    
                })
            // console.log(action.payload)
            CartSlice.caseReducers.calculateTotal(state)
            toast('Item Has Been Updated',{
                            type:"success",
                            position:'top-center'
                        })
            
        },
        calculateTotal :(state)=>{

            localStorage.setItem('cart',JSON.stringify(state.value))
        }
    }
})

export const {addItem,clearCart,removeItem,editItem} = CartSlice.actions

export default CartSlice.reducer