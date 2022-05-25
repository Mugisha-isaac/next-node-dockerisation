import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios'

export default function OtherPageComponent(){
    const [data,setData] = useState([]);

    useEffect(()=>{
       async function getData(){
           await axios.get('api/values/all').then((response)=>setData(response.data)).catch((err)=>console.log(err))
       }
       getData();
    },[data])
    return(
        <div>
            <div>
                {data.map((val)=>(
                    <div>
                        {val}
                    </div>
                ))}
            </div>
           <Link href='/'>
              <button style={{padding:'1rem', margin:'4rem  '}}>Go back</button>
           </Link>
        </div>
    )
}