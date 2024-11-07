// console.log("hello");
// const div =document.getElementById("m");
// console.dir(div);
// const h2=document.createElement("h2");
// h2.innerText="welcome to react js";
// h2.style.color="blue"
// console.log(h2);
// div.appendChild(h2)
const parent= document.getElementById("root");
   const root=ReactDOM.createRoot(parent);
   
//    const h2=React.createElement("h2",{style:{color:'blue'}},"welcome to react js");
//    const li1=React.createElement("li",{},"orange");
//    const li2=React.createElement("li",{},"apple");
//    const li3=React.createElement("li",{},"banana");
//    const li4=React.createElement("li",{},"groot");
//    const ul=React.createElement("ul",{},[li1,li2,li3,li4]);
      const h1 =React.createElement("h1",{},"by react create element");
      const h11 =<h1>creating h1 using JSX</h1>;
    //   root.render(h11);
      const li1=<li>orange</li>
      const li2=<li>apple</li>
      const li3=<li>banana</li>
      const li4=<li>groot</li>
      const ul=<ul>{li1}{li2}{li3}{li4}</ul>

      const mystyle={
        backgroundColor:'blue',
        color :'red ',
        border: '2px solid red'


      };

      const container=(
        <div style={mystyle}>
        <div>welcome to react application development</div>
        <div>{ul}</div>
        <div>{h11}</div>
        </div>
      )


      root.render(container);
//    root.render(ul);
//    root.render(h2);


