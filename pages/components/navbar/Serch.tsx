'uso cliente';

import {BiSearch} from 'react-icons/bi'

const Serch = () => {
  return (
    <div className="border -[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      


      <div className="flex flex-row item-center justify-between">
            <div className="text-sm font-semibold px-6">

                Que Hacer?

            </div>

            <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex text-center">
                        A donde vamos?
            </div>
            <div className="text-sm pl-6 pr-2 text-gray-600 flex felx-row items-center gap-3">

                <div className="hidden sm:block font-semibold flex text center"> A quien Buscas?</div>
                <div className="p-2 bg-green-500 rounded-full   text-green">
                    <BiSearch size = {15}/>
                </div>

            </div>
      </div>
    </div>
  )
}

export default Serch
