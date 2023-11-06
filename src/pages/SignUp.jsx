import React from 'react'
import { Form, Link, redirect, useFormAction, useNavigate, useNavigation } from 'react-router-dom'
import FormInput from '../components/FormInput'
import { ApiInstance } from '../utilities/Index'
import axios from 'axios'


export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await ApiInstance.post('/auth/local/register', data);

    console.log(response)
    // toast.success('account created successfully');
    return redirect('/login');
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error ||
      'please double check your credentials';
      console.log(errorMessage)
    // toast.error(errorMessage);
    return null;
  }
};

const SignUp = () => {
//  const {loa}=useFormAction()
  return (
    <div className='w-full min-h-screen bg-white flex justify-center items-center'>
        <section className='p-10 w-10/12 md:w-[500px] shadow-md'>
            <h1 className='text-3xl text-[#394e6a] font-bold text-center mb-10'>Sign Up</h1>
            <Form method='POST' className='flex flex-col space-y-6'>
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
