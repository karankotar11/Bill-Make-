

export default  function Btn({ setdisplayform, setdisplaydata,location }) {
   const svall=async(e)=>{
        setdisplayform('hidden')
        setdisplaydata('');
       
            e.preventDefault();
            
            try {
              const res = await fetch('/Bill-Make-/api', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ location }),
              });
        
              const data = await res.json();
              console.log(data)
          
            
        
              if (data.success) {
                console.log('Location saved successfully:', data);
              } else {
                console.error('Error saving location:', data.error);
              }
            } catch (error) {
              console.error('Network error:', error);
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