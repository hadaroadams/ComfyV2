import { createSlice, current } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

 
const getUserState=()=>{
    return JSON.parse(localStorage.getItem('user'))||null
}

const initialState={
    user:getUserState()
}

export const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        loginUser:(state,action)=>{
            const user = {...action.payload.user,token:action.payload.jwt}
            state.user = user
            console.log(state)
            localStorage.setItem('user',JSON.stringify(state.user))
            console.log(action.payload)
            toast('You have successfully login',{
                            type:"success",
                            position:'top-center'
                        })
        },
        logoutUser:(state,action)=>{
            state.user=null
            localStorage.removeItem('user')
            console.log('logOut')
            toast('You are  log out',{
                            type:'warning',
                            position:'top-center'
                        })
        },
        toggleTheme:(state,action)=>{
            console.log('toggle theme')
        },
    }
})


export const {loginUser,logoutUser,toggleTheme}= userSlice.actions

export default userSlice.reducer
