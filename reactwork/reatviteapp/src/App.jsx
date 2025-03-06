import React from "react";
import Student from './Student';

function hello(){
  const h1=<h1>Hello world</h1>;
  const mystyle ={
    color:'red',
    backgroundColor:'green'
  }
  return(
    <div style={{backgroundColor:'cyan'}}>
      {h1}
      <div style={mystyle}>
        ABES Engineering college
      </div>
      <div>
        <Student college='ABES Engineering college' 
        pic={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png       'height={100} width={200}></img>}
        name="rahul"
        branch="cse"
        roll="22"
        />
        
      </div>
      <div>
        <Student college='ABES Engineering college' 
        name="Ram"
        branch="cse"
        roll="21"
        />
        
      </div>
    </div>
  );
}
export default hello