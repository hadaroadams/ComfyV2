import { createSlice } from "@reduxjs/toolkit";

 const defaulState={
    user:'Hadaro'
 }

export const userSlice = createSlice({
    name:'users',
    initialState:defaulState,
    reducers:{
        loginUser:(state,action)=>{
            console.log('logIn')
        },
        logoutUser:(state,action)=>{
            console.log('logOut')
            state.user=''
        },
        toggleTheme:(state,action)=>{
            console.log('toggle theme')
        },
    }
})


export const {loginUser,logoutUser,toggleTheme}= userSlice.actions

export default userSlice.reducer
