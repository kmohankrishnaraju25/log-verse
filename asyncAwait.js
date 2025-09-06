const sampleData=async()=>{
    try{
        let response=await fetch("http://www.google.com")
            console.log(response)
        }catch(error){
            console.log("error")
        }
    }
sampleData()
