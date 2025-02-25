const http=require('http');
const PORT=2021;
const server=http.createServer(async(req,res)=>{
    if(req.url=="/msg" && req.method=="GET"){
        res.setHeader('Content-Type','text/html')
        res.end("<h2>hii,grerting of the day</h2>");
    }
    if(req.url=="/msg" && req.method=="POST"){
        res.setHeader("Content-Type","application/json");
        res.end(JSON.stringify({
            msg:"successfully hit the api"
        }));
    }
    if(req.url=="/" && req.method=="GET"){
        res.setHeader('Content-Type','text/html')
        res.end("<h2> welcomme</h2>");
    }
    if(req.url=="/msg" && req.method=="DELETE"){
        res.setHeader('Content-Type','text/html')
        res.end(JSON.stringify({msg:"resource deleted"}));
    }

// res.setHeader('Content-Type','text/html')

// //console.log(Object.keys(req));
// console.log("Request URL="+runInNewContext.url+ "Request method:"+req.method);
// res.write("<h2>its me</h2>")
// res.end("<h2>welcome to romano 459</h2>");
})
server.listen(PORT,()=>{
    console.log("server is running on "+PORT);
})