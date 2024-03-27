//router.js
"using strict"
// listing7.6.js (p.123-124)


const httpStatus = require('http-status-codes'),
    contentTypes=require('./content-types'),
    utils=require('./utils'),
    routes ={
        "GET":{},
        "POST":{}
    };

exports.handle = (req,res) => {
  try{
      routes[req.method][req.url](req,res);
    } 
    catch(ex){
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/error.html", res);
    console.log("error:"+ ex);
  }
};


// main.js로부터 routes에 등록하기 위한 get 및 post 함수 생성
exports.get = (url,action) =>{
  routes["GET"][url] = action;
};
exports.post= (url,action) =>{
  routes["POST"][url] = action;
};

