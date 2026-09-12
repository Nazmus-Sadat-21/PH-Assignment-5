import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Technologies from "./Components/Technologies/Technologies";
import type { TechnologiesProps } from "./Type";
import Stack from "./Components/Technologies/Stack";

function App() {
  const tech = async (): Promise<TechnologiesProps[]> => {
    var response = await fetch("/data.json");
    var data = await response.json();
    return data;
  };
  
  const [technologies] = useState(() => tech());

  const [selectedTech, setselectedTech] = useState<TechnologiesProps[]>([]);

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <div className="container mx-auto px-5 sm:px-7">
        <h2 className="text-2xl sm:text-xl md:text-4xl font-bold tracking-tight text-slate-900 ">
          Explore The <span className="text-secondary">Technologies</span>
        </h2>
        <p className="text-slate-500 text-sm sm:text-base mt-2">
          Pick one Technology per category to build your ideal stack
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mt-4 contain-contenter mx-auto px-4 py-4">
        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3">
          <Suspense fallback={<div>Loading...</div>}>
            <Technologies
              Technologies={technologies}
              selectedTech={selectedTech}
              setselectedTech={setselectedTech}
              
            />
          </Suspense>
        </div>
        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1">
          <Stack
            selectedTech={selectedTech}
            setselectedTech={setselectedTech}
           
          ></Stack>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
