// //os
// const os = require('os')

// const user = os.userInfo()
// console.log(user)
// console.log(`The system uptime is ${os.uptime()}`)
// //...and many more

// //path
// const path = require('path')
// console.log(path.sep)
// const filepath = path.join('/content/','subfolder','test.txt')

// //http

// let http = require('http');

// http.createServer(function(req,res){
//     res.write("hello from server");
//     res.end();
//     }).listen(5500);

// // fs

// const fs = require('fs');
// fs.readFile('link.txt','utf8',(err,data) =>{
//     if(err){
//         console.log("error occured");
//         console.log(err);
//         return;
//     }
//     console.log(data);
// });

// //PATH
// const path = require('path');
// let result = path.basename('index.html');
// console.log(result);

// util
let util = require('util');
let str = 'The loop has executed %d time(s).';
for (let i = 1; i <= 10; i++) {
    console.log(util.format(str, i)); //outputs 'The loop has executed i time(s)'
}

//