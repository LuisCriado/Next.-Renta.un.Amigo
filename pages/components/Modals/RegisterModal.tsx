'use client'

import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import {FcGoogle} from 'react-icons/fc'
import { useCallback ,useState } from 'react';
import {FieldValues,SubmitHandler ,useForm} from 'react-hook-form';
import useRegisterModal from '@/hooks/useRegisterModal';
import { error } from 'console';
import Modal from './Modal';
import Heading from '../Heading/Heading';
import Inputs from '../inputs/Inputs';

     //creacion del Login 
const RegisterModal = () => {

 const registerModal = useRegisterModal();
 const [isLoading, setIsLoading] = useState(false);

 const {
    register,
    handleSubmit,
    formState:{
        errors,
    }
 }= useForm<FieldValues>({
    defaultValues: {
        name: '',
        email: '',
        password:''
    }
 });

 const onSubmit: SubmitHandler<FieldValues> = (data) =>{
    setIsLoading(true);

    axios.post('/api/register',data)
    .then(()=>{
        registerModal.onClose();
    })
    .catch((error) =>{
        console.log(error);
    })
    .finally(() =>{
        setIsLoading(false);
    })
 } 

 const bodyContent = (
    <div className='flex flex-col gap-4 '>
            <Heading  title='Bienvenido a Alquila Amigos' subtitle='Create una cuenta' />
            <Inputs id='email' label='Email' disabled={isLoading} register={register} errors={errors} required/>
            <Inputs id='name' label='Name' disabled={isLoading} register={register} errors={errors} required/>
            <Inputs id='password' type='password' label='Password' disabled={isLoading} register={register} errors={errors} required/>
            
    </div>
 )


  return (
    <Modal dsisable={isLoading} isOpen={registerModal.isOpen} title='Registro' actionLable='Continue' onClose={registerModal.onClose} onSubmit={handleSubmit(onSubmit)} body={bodyContent}/>
  );
}

export default RegisterModal;
