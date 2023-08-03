import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';

export const myContaxt = createContext();

function App() {
  const [alldata, setAlldata] = useState([]); // Initialize data with an empty array
  const [category,setCategory]=useState([])
  const data= {
    alldata,setAlldata,
    category,setCategory
  }

  useEffect(() => {
    fetch('https://api.npoint.io/a5309d721d856bb517d5/')
      .then((response) => response.json())
      .then((jsonData) => {
         console.log('API response:', jsonData);
        setAlldata(jsonData.categories);
          // console.log("sub_category",jsonData.sub_categories  );
          setCategory(jsonData.sub_categories
            )
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setAlldata([]); // Handle any error by setting data to an empty array
      });
  }, []);
  

  return (
    <div>
      <myContaxt.Provider value={data}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </myContaxt.Provider>
    </div>
  );
}

export default App;
