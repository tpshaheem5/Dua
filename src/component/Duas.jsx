import React, { useContext, useEffect, useState } from 'react'
import { myContaxt } from '../App'
import { useParams } from 'react-router-dom'

const Duas = () => {
  const {duas} = useContext(myContaxt)

  const [vajamnams,setVajanams]=useState([])
  

  const {duasid}= useParams()

  
  useEffect(()=>{

    console.log("paramas id",duasid)

    duaHandle(duasid)
  },[])

  // *********HANDLE DUAS**************

  const duaHandle=(...dua_ids)=>{
    
    console.log(" duas inside handler",dua_ids);
    
    const pass_id = parseInt(dua_ids)
    
    console.log("typeof ids",typeof(pass_id));

    // const flattened_dua_ids = dua_ids.flat();
    console.log("dua_ids",dua_ids);
    const filterd_duas = duas.filter((item) =>dua_ids.includes(item.id));
    console.log("filtered_duas",filterd_duas);
    setVajanams(filterd_duas)

    console.log("vajanam after sett",vajamnams);
    


  }


  return (

    
     <div className='dua_data'>

    {vajamnams.map((item)=>{
       return(
        <>
        
             <h3 key={item.id}>
               {item.dua}
             </h3>
            <h3>{item.trans}</h3>
        </>
         )
  })}

</div>
  )
}

export default Duas