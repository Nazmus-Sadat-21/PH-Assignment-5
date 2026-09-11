import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import Technologies from './Components/Technologies/Technologies'
import type { TechnologiesProps } from './Type'
import Stack from './Components/Technologies/Stack'

function App() {
  
  const tech = async ():Promise<TechnologiesProps[]>=>{
    var response = await fetch("/data.json");
    var data = await response.json();
    return data;
  }

  const [technologies] = useState(()=>tech())

  const [selectedTech,setselectedTech] = useState<TechnologiesProps[]>([])

  return (
    <>
     <Nav></Nav>
     <Banner></Banner>
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mt-4 contain-contenter mx-auto px-4 py-4'>
      <div className='col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3'>
        <Suspense fallback={<div>Loading...</div>}>
          <Technologies Technologies={technologies} selectedTech={selectedTech} setselectedTech={setselectedTech} />
        </Suspense>
      </div>
     <div className='col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1'>
      <Stack selectedTech={selectedTech} setselectedTech={setselectedTech}></Stack>
     </div>
     </div>
     <Footer></Footer>
    </>
  )
}

export default App
