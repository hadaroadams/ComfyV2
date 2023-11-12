import { createSlice, current } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

 
const getUserState=()=>{
    return JSON.parse(localStorage.getItem('user'))||null
}

const themes ={
    darkMode:'dark',
    lightMode:'light'
}

const getColorTheme=()=>{
    const theme =localStorage.getItem('theme') || themes.lightMode
     document.body.className=theme
    //  console.log(document.body.className)
    return theme
}

const initialState={
    user:getUserState(),
    theme:getColorTheme()
}

export const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        loginUser:(state,action)=>{
            const user = {...action.payload.user,token:action.payload.jwt}
            state.user = user
            // console.log(state)
            localStorage.setItem('user',JSON.stringify(state.user))
            // console.log(action.payload)
            // toast('You have successfully login',{
            //                 type:"success",
            //                 position:'top-center'
            //             })
        },
        logoutUser:(state,action)=>{
            state.user=null
            state.theme=
            localStorage.removeItem('user')
            // localStorage.removeItem('theme')
            // console.log('logOut')
            toast('You are  log out',{
                            type:'warning',
                            position:'top-center'
                        })
        },
        toggleTheme:(state,action)=>{
            // console.log(current(state.user))
            // console.log('hello')
            const currentTheme=getColorTheme()==='light'?'dark':'light'
            // console.log(currentTheme,getColorTheme)
            localStorage.setItem('theme',currentTheme)
            state.theme = currentTheme
            // console.log(state.theme)
            document.body.className=state.theme
        },
    }
})


export const {loginUser,logoutUser,toggleTheme}= userSlice.actions

export default userSlice.reducer
