// console.log("welcome to js");
// var a=12;
// console.log(a);
// if(a>10){
//     let b=23;  //scope of let os only inside the block
//     a=40;
//     console.log("a inside condition"+a);
// }
// console.log("a outside condition:"+b);
// let a=12;
// let b="12";
// console.log(typeof a);
// let today=Date();
// console.log(today);

// if(a==b){
//     console.log("welcome");

// }
// else{
//     console.log("bhag ")
// }
// let myname="JAY";
// let college="IIT GZB";
// let result=`hi, my name is ${myname} and i am doing engineering from ${college} `;
// console.log(result);

//ojects in JS
//key:value



// let key="sname";

// const student=[
//     {
//     sname:"Jay",
//     course:"B.tech",
//     college:"IIT GZB"
//     },
//     {
//         sname:"ram",
//         course:"B-H",
//         college:"ABES EC",
//     }
// ]
// console.log(student);
// console.log("Name:"+student.sname+"course:"+student.course);
// const {sname}=student;
// console.log(sname);
// student[key]="Rahul";
// console.log(student);
// console.log(student[1].sname);
// console.log(student[1].college);

// function greeting(msg="Welcome"){
//     console.log("Good Morning "+msg);
// }
// greeting("Greetings");

// function sum(a,b,c){
//     return a+b+c;
// }
// // console.log(sum(1,2));
// let t=sum(0,0,1);
// console.log(t)


//callback function

// function cCompiler(){
// return "Ccompiler selected";
// }
// function javacompiler(){
// return "Java compiler selected"
// }
// function selectlanguage(language){
//     // console.log("you have :"+clbk());
//     let data;
//     if(language=="c"){
//        function cCompiler(){
//          return "Ccompiler selected";
//     }
//     data=cCompiler();
// }
//     if(language=="java"){

//         function javacompiler(){
//     return "Java compiler selected"
//     }
//     data=javacompiler();
    
// }
//   return data;
// }
// let r=selectlanguage("c");
// console.log(r)
console.log("Hello world!");
let parent=document.getElementsByClassName("parent");
console.log(document)
parent[0].innerText="Data has changed";


