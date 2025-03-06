const fs=require('fs').promises;
const pd=fs.writeFile('student.pdf',"CSEB studdents data");
//console.log(pd);
pd.then(()=>{
    console.log("Data written successfully")


})
.catch((err)=>{
    console.log("Error while writting in file"+err);
})
.finally(()=>{
    console.log("Resourse closed")
})

async function readFilepromise(){
    try{
   const data= await fs.readFile('student.pdf',{encoding:'utf-8'})
    console.log(data);
    }catch(err){
        console.log("Error while reading the data:"+err);
    }
}
readFilepromise();
