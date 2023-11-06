import React from 'react'
import FormInput from '../components/FormInput'
import { Form, Link, redirect, useNavigate, useNavigation } from 'react-router-dom'
import { ApiInstance } from '../utilities/Index'
import { loginUser } from '../features/UserSlice'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

export const action =
  (store)=>
  async({request})=>{
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    console.log(data)
  try{
    const response = await ApiInstance.post('/auth/local', data)
      console.log(response.data)
      store.dispatch(loginUser(response.data))
    return redirect('/')
  }catch(error){
    const errorMessage =
      error?.response?.data?.error ||
      'please double check your credentials';
      console.log(errorMessage)
      toast(errorMessage,{
        type:'error',
        position:"top-center"
      })
    // toast.error(errorMessage);
    return null;
  }

}

const LogIn = () => {
    // const {state}= useNavigation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
 
    // console.log(state)
    const logInAsGuest=async()=>{
      try{
        const response = await ApiInstance.post('/auth/local',{identifier:'test@test.com',password:'secret'})
        console.log(response)
        dispatch(loginUser(response.data.user))
        navigate('/')
      }catch(error){
        console.log(error)
      }
    }
  return (
    <div className='w-full min-h-screen bg-white flex justify-center items-center'>
        <section className='p-10 w-10/12 md:w-[500px] shadow-md'>
            <h1 className='text-3xl text-[#394e6a] font-bold text-center mb-10'>Login</h1>
            <Form method='POST' className='flex flex-col space-y-6'>
                <FormInput label='Email' type='email' defaultValue={''} name={'identifier'} placeholder={'Enter Email'} />
                <FormInput label='Password' type='password' defaultValue={''} name={'password'} placeholder={'Enter Password'} />
                <button type='submit' className='btn bg-[#0069E0] border-none text-[white]'>
                    {/* {state=='submitting'? <><span className="loading loading-spinner"></span><span>Logging In</span></> : ''} */}
                     LOGIN
                </button>
                <button onClick={logInAsGuest} className='btn w-full mt-3 bg-[#3B3187] border-none text-[white]'>GUEST USER</button>
                <p className='text-center text-[#394e6a]'>Not a member yet? <Link to='/Signup' className='text-[#0069E0]'>Register</Link></p>
            </Form>
        </section>
    </div>
  )
}

export default LogIn
