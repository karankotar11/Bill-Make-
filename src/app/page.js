
'use client'

import { useEffect, useState } from "react"
import { initialBillData } from "./utils";
import GetFormData from "../components/data-form";
import PrintData from "../components/print-data";





export default function Home() {
 

  const [displayform, setdisplayform] = useState('');
  const [location, setLocation] = useState({ latitude: '', longitude: '' });
  const [displaydata, setdisplaydata] = useState('hidden')
  // const [billData, setbillData] = useState(JSON.parse(localStorage.getItem('billdata')) || initialBillData)
  const [billData, setbillData] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedBillData = localStorage.getItem('billdata');
      return storedBillData ? JSON.parse(storedBillData) : initialBillData;
    }
    return initialBillData;
  });

  useEffect(() => {
    
    localStorage.setItem('billdata',JSON.stringify(billData))
  }, [billData])
  


  useEffect(() => {
    
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.log(error.message);
        }
      );
    
    } else {
      console.log('Geolocation is not supported by your browser');
    }
  }, []);

  return (
    <div className="w-screen">
      <GetFormData displayform={displayform} setbillData={setbillData} setdisplayform={setdisplayform} billData={billData} location={location} setLocation={setLocation} setdisplaydata={setdisplaydata}/>

      <PrintData displaydata={displaydata} setdisplaydata={setdisplaydata} billData={billData} setdisplayform={setdisplayform}/>
      
  
    </div>
  );
}
