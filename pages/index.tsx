import ToasterProvider from "@/providers/ToasterProvider"
import ClientOnly from "./components/ClientOnly"

import RegisterModal from "./components/Modals/RegisterModal"
import Navbar from "./components/navbar/Navbar"


export default function Home({children}) {
  return (
    <>

    
    <ClientOnly>
      <ToasterProvider/>
     <RegisterModal/>
    <Navbar/>
    </ClientOnly>
    {children}
    
    
    </>
  )
}
