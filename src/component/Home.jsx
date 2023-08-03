 import React, { useContext, useEffect, useState} from 'react';
 import { myContaxt } from '../App';
//  import

 import'./Home.css'
import { useNavigate } from 'react-router-dom';

// function Home() {
//   const { alldata,category } = useContext(myContaxt);
//   console.log("Home data",alldata);

//   const [prayers, setPreyers] =useState([])

//   const filterHandle =(...category_id)=>{
     
//      console.log("category_id",category_id);

    
   
    

//     const filterd_data= category.filter((item)=>category_id.includes(item.id))
//     console.log("filterd_data",filterd_data);
//     setPreyers(filterd_data)
//     // console.log("FILTRD DATA",prayers);
    

//   }

//   useEffect(() => {
   
//     console.log("PRAYERS",prayers);
//      }, [prayers]);


//   return (
//       <div className='main_container'>  
  
//          <div className='main_data' style={{}}>
//                <h1>Homee</h1>
//                {alldata.map((e) => (
//                 <div key={e.id}>
//                   <button onClick={()=>filterHandle(e.sub_cats)}>{e.title }</button>

          
//                       {/* <h2>{e.sub_cats}</h2>  */}
//                  </div>
       
//                ))}
       
//           </div>

//            <div className='sub_data'>
//               {prayers.map((item)=>{
//                 return(
//                   <h3>{item.title}</h3>
//                 )
//                })}

//             </div>
//      </div>

//   );
// }

// export default Home;

function Home() {
  const { alldata, category,prayers,setPrayers } = useContext(myContaxt);
  const nav= useNavigate()


  // console.log("Home data", alldata);

  // const [prayers, setPreyers] = useContext();

// ************TO FILTER THE SUB CATEGORY ARRAY**********
  
  const prayersFilterHandle = (...category_id) => {
    console.log("category_id", category_id);

    console.log("category data inside filter handle",category);

    const flattened_category_ids = category_id.flat();

    const filterd_data = category.filter((item) =>
    flattened_category_ids.includes(item.id)
    );
    console.log("filterd_data", filterd_data);
    setPrayers(filterd_data);
  };

  

  useEffect(() => {
    console.log("PRAYERS", prayers);
  }, [prayers]);

  return (
    <div className='main_container'>
      <div className='main_data'>
        <h1>Duas</h1>
        {alldata.map((e) => (
          <div key={e.id}>
            <button onClick={() => prayersFilterHandle(e.sub_cats)}>
              {e.title}
            </button>
          </div>
        ))}
      </div>

      <div className='sub_data' style={{display:'flex',justifyContent:'space-between'}}>
        {prayers.map((item) => {
          return(
          <>
          <h3 onClick={()=>nav(`./Duas/${item.duas}`)} key={item.id}>{item.title}</h3>
          
          </>
          
          )
        
        })}
        
      </div>
    </div>
  );
}

export default Home;

