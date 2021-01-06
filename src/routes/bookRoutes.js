const express = require('express');
const bookRouter = express.Router();
const Bookdata = require('../models/Bookdata');
function router(){
    bookRouter.get('/',function(req,res){
   
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
        Bookdata.find()
                    .then(function(books){
                        res.send(books);
                    });
    });
    bookRouter.post('/insert',function(req,res){
    
      res.header("Access-Control-Allow-Origin","*");
      res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS") ;
        console.log(req.body);
        var book = {       
            id : req.body.book.id,
            title : req.body.book.title,
            author:req.body.book.author,
            genre: req.body.book.genre,
            image : req.body.book.image
        }
        var item = new Bookdata(book);
        
       
        item.save();
        console.log(book);
        // console.log('success');
    });

    
    // bookRouter.get('/:id',  (req, res) => {
      
    //     const id = req.params.id;
    //       Bookdata.findOne({"_id":id})
    //       .then((book)=>{
    //           res.send(book);
    //       });
    //   })
    //   bookRouter.put('/update/:id',(req,res)=>{
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
      bookRouter.delete('/remove/:id',(req,res)=>{
       
        id = req.params.id;
        Bookdata.findByIdAndDelete({"_id":id})
        .then(()=>{
            console.log('success')
            res.send();
        })
      })
    //   bookRouter.get('singlebook/:id',(req,res)=>{
    //       id=req.params.id;
    //       Bookdata.findOne({_id:id})
    //     .then(function(singlebook){
    //         res.send(singlebook)
    //   })
    // })
    return bookRouter;
}
//acts as calling function as well
module.exports = router;