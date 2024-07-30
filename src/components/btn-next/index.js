
import { SaveLocation } from "@/actions";

export default  function Btn({ setdisplayform, setdisplaydata,location }) {
   const svall=async()=>{
        setdisplayform('hidden')
        setdisplaydata('');
        try{
            const data = await SaveLocation(location)
        console.log(data) 
        }
        catch(e){
            console.log("Error in svall",e)
        }
       
    }
    // async function sett(){
    //     const data = await SaveLocation(location)
    //     console.log(data)
     
    //    }
    return (
        <button type="submit" className="bg-blue-600 text-white px-5 py-2 rounded-lg mt-5 mx-10" onClick={svall}>
            Next
        </button>
    )

}