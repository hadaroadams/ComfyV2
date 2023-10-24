import React from 'react'
import FormInput from '../components/FormInput'
import { Form, Link, useNavigate, useNavigation } from 'react-router-dom'

const LogIn = () => {
    // const {state}= useNavigation()
    const navigate = useNavigate()
    // console.log(state)
    const handlelogIn=()=>{
      navigate('/')
    }
  return (
    <div className='w-full min-h-screen bg-white flex justify-center items-center'>
        <section className='p-10 w-10/12 md:w-[500px] shadow-md'>
            <h1 className='text-3xl text-[#394e6a] font-bold text-center mb-10'>Login</h1>
            <Form method='post' className='flex flex-col space-y-6'>
                <FormInput label='UserName' type='text' defaultValue={''} name={'username'} placeholder={'Enter Username'} />
                <FormInput label='Password' type='password' defaultValue={''} name={'password'} placeholder={'Enter Password'} />
                <button type='submit' className='btn bg-[#0069E0] border-none text-[white]'>
                    {/* {state=='submitting'?<><span className="loading loading-spinner"></span><span>Logging In</span></>:''} */}
                     LOGIN
                </button>
                <button className='btn bg-[#3B3187] border-none text-[white]'>GUEST USER</button>
                <p className='text-center text-[#394e6a]'>Not a member yet? <Link to='/Signup' className='text-[#0069E0]'>Register</Link></p>
            </Form>
        </section>
    </div>
  )
}

export default LogIn
