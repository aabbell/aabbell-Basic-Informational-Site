var http = require("http");
const fs = require("fs");
const path = require("path");
const { fail } = require("assert");


const handleError = (err, res) => {
    if (err) {
      console.error("Server Error:", err);
      res.writeHead(500, { "Content-type": "text/html" });
      res.end("internal server error");
      return true;
    }
    return false;
  };

http.createServer((req, res) => {
    if(req.url === '/' || req.url === '/home'){
        fs.readFile(path.join(__dirname, "./index.html"),(err,data) => {
            if (handleError(err, res)) return;

        res.writeHead(200, { "Content-type": "text/html" });
        res.end(data);
      });
        }else if(req.url === '/about'){
            fs.readFile(path.join(__dirname , "./about.html"), (err,data) => {
                if(handleError(err ,res))
                    return
                res.writeHead(200,{ "content-type": "text/html"})
                res.end(data)
            })
        }else if(res.url === "/contant-me"){
            fs.readFile(path.join(__dirname  ,"./contact-me.html") , (err ,data) =>{
                if(handleError(err ,res))
                    return
                res.writeHead(200 ,{"content-type": "text/html"})
                res.end(data)
            })
        }else{
            fs.readFile(path.join(__dirname , "./404.html"),(err,data) => {
                res.writeHead(404,{"content-type": "text/html"})
                res.end(data)
            })
        }
    
}).listen(8080)