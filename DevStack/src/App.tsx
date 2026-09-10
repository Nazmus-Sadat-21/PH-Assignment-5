import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import Technologies from './Components/Technologies/Technologies'
import type { TechnologiesProps } from './Type'
import Stack from './Components/Technologies/Stack'

function App() {
  
  const technologies = async ():Promise<TechnologiesProps[]>=>{
    var response = await fetch("/data.json");
    var data = await response.json();
    return data;
  }

  return (
    <>
     <Nav></Nav>
     <Banner></Banner>
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-5 mt-4 contain-contenter mx-auto px-4 py-4'>
      <Suspense fallback={<div>Loading...</div>}>
      <Technologies Technologies={technologies()} />
     </Suspense>
     <Stack></Stack>
     </div>
     <Footer></Footer>
    </>
  )
}

export default App
