import React from 'react'
import { Form, Link, redirect, useFormAction, useNavigate, useNavigation } from 'react-router-dom'
import FormInput from '../components/FormInput'
import { ApiInstance } from '../utilities/Index'
import axios from 'axios'
import { toast } from 'react-toastify'
import SubmitBtn from '../components/SubmitBtn'


export const action =(queryclient)=> async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await ApiInstance.post('/auth/local/register', data);

    // console.log(response)
    toast(errorMessage,{
          type:'success',
          position:'top-center'
        });    
      return redirect('/login');
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error ||
      'please double check your credentials';
      console.log(errorMessage)
    toast(errorMessage.name,{
      type:'error',
      position:'top-center'
    });
    return null;
  }
};

const SignUp = () => {
//  const {loa}=useFormAction()
  return (
    <div className='w-full min-h-screen bg-white dark:bg-[#272935] flex justify-center items-center'>
        <section className='p-10 w-10/12 md:w-[500px] shadow-2xl'>
            <h1 className='text-3xl text-[#394e6a]dark:text-[white] font-bold text-center mb-10'>Sign Up</h1>
            <Form method='POST' className='flex flex-col space-y-6'>
                <FormInput label='UserName' type='text' defaultValue={''} name={'username'} placeholder={'Enter Username'} />
                <FormInput label='Email' type='email' defaultValue={''} name={'email'} placeholder={'Enter Email'} />
                <FormInput label='Password' type='password' defaultValue={''} name={'password'} placeholder={'Enter Password'} />
                
                <SubmitBtn text1={'REGISTER'} text2={'REGISTERING'}/>
                
                <p className='text-center text-[#394e6a] dark:text-[white]'>Already a member? <Link to='/LogIn' className='text-[#0069E0] dark:text-[#F67FC5]'>Login</Link></p>
            </Form>
        </section>
    </div>
  )

}

export default SignUp
