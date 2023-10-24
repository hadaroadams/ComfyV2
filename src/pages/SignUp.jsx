import React from 'react'
import { Form, Link, useNavigate, useNavigation } from 'react-router-dom'
import FormInput from '../components/FormInput'


export const action = async({request})=>{
  const formData = await request.formData()
  formData.entr
  console.log(formData)
  return null
}

const SignUp = () => {
  return (
    <div className='w-full min-h-screen bg-white flex justify-center items-center'>
        <section className='p-10 w-10/12 md:w-[500px] shadow-md'>
            <h1 className='text-3xl text-[#394e6a] font-bold text-center mb-10'>Sign Up</h1>
            <Form method='post' className='flex flex-col space-y-6'>
                <FormInput label='UserName' type='text' defaultValue={''} name={'username'} placeholder={'Enter Username'} />
                <FormInput label='Email' type='email' defaultValue={''} name={'email'} placeholder={'Enter Email'} />
                <FormInput label='Password' type='password' defaultValue={''} name={'password'} placeholder={'Enter Password'} />
                <button type ='submit' className='btn bg-[#0069E0] border-none text-[white]'>
                    {/* {state=='submitting'?<><span className="loading loading-spinner"></span><span>Logging In</span></>:''} */}
                     register
                </button>
                <p className='text-center text-[#394e6a]'>Already a member? <Link to='/LogIn' className='text-[#0069E0]'>Login</Link></p>
            </Form>
        </section>
    </div>
  )
}

export default SignUp
