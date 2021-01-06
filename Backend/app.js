const express = require('express');
const Bookdata = require('./src/models/Bookdata');
var Authordata=require('./src/models/Authordata');
// const request = require('request');
// const User = require('./src/model/user');
const cors = require('cors');
var bodyparser=require('body-parser');
// const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
// app.options('*', cors());
app.use(bodyparser.json());
const authorRouter = require('./src/routes/authorRoutes') (app)
const bookRouter = require('./src/routes/bookRoutes') (app)
app.use('/authors',authorRouter);
app.use('/books',bookRouter);

app.get('/:id',  (req, res) => {
  
    const id = req.params.id;
      Bookdata.findOne({"_id":id})
      .then((book)=>{
          res.send(book);
      });
  })
  app.put('/update',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS") ;
    console.log(req.body)
    ids=req.body._id,
    id=req.body.id,
    title=req.body.title,
author=req.body.author,
genre=req.body.genre,
image=req.body.image,
Bookdata.findByIdAndUpdate({"_id":ids},
{$set:{
    "id":id,
    "title":title,
    "author":author,
    "genre":genre,
    "image":image}})
    .then(function(){
        res.send();
    })
  })



  // author update
  app.get('/authors/:id',  (req, res) => {
  
    const id = req.params.id;
      Bookdata.findOne({"_id":id})
      .then((book)=>{
          res.send(book);
      });
  })
  app.put('/edit',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS") ;
    console.log(req.body)
    idx=req.body.author._id,
    id=req.body.author.id,
    name=req.body.author.name,
genre=req.body.author.genre,
books=req.body.author.books,
image=req.body.author.image,
Authordata.findByIdAndUpdate({"_id":idx},
{$set:{
    "id":id,
    "name":name,
  
    "genre":genre,
    "books":books,
    "image":image}})
    .then(function(){
        res.send();
    })
  })
//   app.delete('/remove/:id',(req,res)=>{
   
//     id = req.params.id;
//     Bookdata.findByIdAndDelete({"_id":id})
//     .then(()=>{
//         console.log('success')
//         res.send();
//     })
//   })
// //   app.get('singlebook/:id',(req,res)=>{
//       id=req.params.id;
//       Bookdata.findOne({_id:id})
//     .then(function(singlebook){
//         res.send(singlebook)
//   })
// })


// authors CRUD operations

// app.get('/authors',function(req,res){
   
//     res.header("Access-Control-Allow-Origin","*");
//     res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
//     Authordata.find()
//                 .then(function(authors){
//                     res.send(authors);
//                 });
// });
// app.post('/authors/add',function(req,res){

//   res.header("Access-Control-Allow-Origin","*");
//   res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS") ;
//     console.log(req.body);
//     var author = {       
//         authorid : req.body.author.authorid,
//         name : req.body.author.name,
        
//         genre: req.body.author.genre,
//         books:req.body.author.books,
//         image : req.body.author.image
//     }
//     var author = new Authordata(author);
    
   
//     author.save();
//     console.log(author);
//     // console.log('success');
// });
// app.get('/authors/:id',  (req, res) => {
  
//     const i = req.params.id;
//       Authordata.findOne({"_id":i})
//       .then((author)=>{
//           res.send(author);
//       });
//   })
//   app.put('/update',(req,res)=>{
//     res.header("Access-Control-Allow-Origin","*");
//     res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS") ;
//     console.log(req.body)
//     ids=req.body._id,
//     id=req.body.id,
//     title=req.body.title,
// author=req.body.author,
// genre=req.body.genre,
// image=req.body.image,
// Bookdata.findByIdAndUpdate({"_id":ids},
// {$set:{
//     "id":id,
//     "title":title,
//     "author":author,
//     "genre":genre,
//     "image":image}})
//     .then(function(){
//         res.send();
//     })
//   })
//   app.delete('/remove/:id',(req,res)=>{
   
//     id = req.params.id;
//     Bookdata.findByIdAndDelete({"_id":id})
//     .then(()=>{
//         console.log('success')
//         res.send();
//     })
//   })








app.listen(3000,()=>{
    console.log("Server ready at port:3000");
});