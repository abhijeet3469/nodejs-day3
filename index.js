// What is JSON Data - type of data type which hold the information in the form of key: value pair.
// e.g. 1.
//  const express = require("express");
//  const jsonData = require("./data")
//  const app = express();
//  app.get("/getUsers", function(req, res){
//     res.json(jsonData)           // -----> 1
// res.json(jsonData.amit)      // ------> 2
// res.json(jsonData.amit.name) // ------> 3
// res.send(jsonData.amit.name)  //------> 4
//  })
//  app.listen(3000, ()=>{
//     console.log("Application is running");
//  })

// e.g. 2.
// const express = require("express");
// const jsonData = require("./data")
// const x = express();

// x.get("/getUsers1", function(req, res){
// res.json(jsonData.json1)             // ------>   1
// res.json(jsonData.users.json1)    // ------>  2
// });

// x.get("/getUsers2", function(req, res){
// res.json(jsonData.json2)                //  -------> 1
// res.json(jsonData.users.json2)       //  -------> 2
// });

// x.listen(3000, ()=>{console.log("Application is running");});

// Express Routing:-

// e.g. 3.
// const express = require("express");
// const jsonData = require("./data")
// const x = express();
// x.get("/students", function(req, res){
//    res.json(jsonData.students)
//    // res.json(jsonData.userData.students) // ---> 2
// })
// x.get("/teachers", function(req, res){
//    res.json(jsonData.teachers)
//    // res.json(jsonData.userData.teachers) // ----> 2
// })
// x.listen(3000, ()=>{
//    console.log("Application is running");
// })

// e.g. 4.
// const express = require("express");
// const jsonData = require("./data")
// const x = express();
// x.get("/students", function(req, res){
//    res.json(jsonData.students)
// })
// x.get("/teachers", function(req, res){
//    res.json(jsonData.teachers)
// })
// x.listen(3000, ()=>{
//    console.log("Application is running");
// })

// e.g. 5. accessing function
// const express = require("express");
// const jsonData = require("./data");
// const x = express();
// x.get("/students", function(req, res){
//    console.log(jsonData.add(4,5));
//    res.json(jsonData.students)
// });
// x.get("/teachers", function(req, res){
//    res.json(jsonData.teachers)
// });
// x.listen(3000)
