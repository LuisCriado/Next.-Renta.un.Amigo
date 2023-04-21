'usacliene';

import {AiOutlineMenu} from 'react-icons/ai'
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import ManuItems from './ManuItems';
import useRegisterModal from '@/hooks/useRegisterModal';

const UserMenu = () => {
    const registerModal = useRegisterModal();

    const [isOpen, setFisOpen] = useState(false)


    const toogleOpen = useCallback(()=>{
        setFisOpen((value)=>!value);
    },[])
  return (
    <div className=" relative">
        <div className="flex flex-row item-center gap-3">
            <div onClick={()=>{}}
            className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
            >
                Encuentra aqui Amistades Para Diferentes Actividades

            </div>
            <div  onClick={toogleOpen}
                   className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
                    <AiOutlineMenu/>
                    <div className='hidden md:block'>
                        <Avatar/>

                    </div>
            </div>

        </div>
        {isOpen && (
            <div className=' absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-withe overflow-hidden tight-0 top-12 text-sm'>
                    <div className='flex flex-col cursos-pointer'>
                            <>
                               <ManuItems 
                               onClick={()=>{}}
                               label='Login'
                               />
                                <ManuItems 
                               onClick={registerModal.onOpen}
                               label='Sing Up'
                               />
                            </>
                    </div>
            </div>
        )}
      
    </div>
  )
}

export default UserMenu
