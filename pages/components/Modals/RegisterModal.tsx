'use client'

import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import {FcGoogle} from 'react-icons/fc'
import { useCallback ,useState } from 'react';
import {FieldValues,SubmitHandler ,useForm} from 'react-hook-form';
import useRegisterModal from '@/hooks/useRegisterModal';

import Modal from './Modal';
import Heading from '../Heading/Heading';
import Inputs from '../inputs/Inputs';
import {toast} from 'react-hot-toast'
import Buttton from '../Button/Buttton';

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
       toast.error('Creo que te has equivocado');
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
 );

 const footerContent = (
    <div className=' flex flex-col gap-4 mt-3'>
            <hr />
            <Buttton outline label='Continue Con Google' icon={FcGoogle} onClick={()=>{}} />
            <Buttton outline label='Ingrese Con GitHub' icon={AiFillGithub} onClick={()=>{}} />
            <div className=' text-neutral-500 text-center mt-4 font-light'>
                <div className=' justify-center flex flex-row items-center gap-2'> 
                    <div>
                    Ya tienes Cuenta?
                    </div>
                    <div  onClick={registerModal.onClose} className='text-neutral-800 cursor-pointer hover:underline'>
                        Ingresa
                    </div>
                </div>

            </div>
    </div>
 )


  return (
    <Modal dsisable={isLoading} isOpen={registerModal.isOpen} title='Registro' actionLable='Continue' onClose={registerModal.onClose} onSubmit={handleSubmit(onSubmit)} body={bodyContent} footer={footerContent}/>
  );
}

export default RegisterModal;
