const fs=require('fs');

function writeData(){
try{

fs.writeFileSync('data.txt', " Welcome to node js fs module");
console.log("Data is written successfully");
}
catch(err){
    console.log("Error during writing in file:"+err);
}
}

function readData(){
    try{
const frd=fs.readFileSync('data.txt',{encoding:'utf-8'});
return frd;
    }catch(err){
        console.log("error during reading the file:"+ err);
    }
}




function dataadd(){
    try{
fs.appendFileSync('data.txt', "Hii data is appended using fs module");
console.log("data is appended successfully");
    }
    catch(err){
        console.log("Error while adding the data"+err)
    }
}

function deldata(){
    try{
fs.unlinkSync('data.txt');
console.log("data deleted");
    }
    catch(err){
        console.log("Error in deleting data"+err);
    }
}
const obj={
    readData,
    writeData,
    deldata,
    dataadd
}
module.exports=obj