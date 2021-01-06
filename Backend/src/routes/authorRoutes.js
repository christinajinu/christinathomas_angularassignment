const express = require('express');
const authorRouter = express.Router();
const Authordata = require('../models/Authordata');
function router(){
    authorRouter.get('/',function(req,res){
   
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
        Authordata.find()
                    .then(function(authors){
                        res.send(authors);
                    });
    });
    authorRouter.post('/add',function(req,res){
    
      res.header("Access-Control-Allow-Origin","*");
      res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS") ;
        console.log(req.body);
        var author = {       
            authorid : req.body.author.authorid,
            name : req.body.author.name,
            
            genre: req.body.author.genre,
            books:req.body.author.books,
            image : req.body.author.image
        }
        var author = new Authordata(author);
        
       
        author.save();
        console.log(author);
        // console.log('success');
    });
    authorRouter.delete('/delete/:id',(req,res)=>{
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS") ;
        id = req.params.id;
        Authordata.findByIdAndDelete({"_id":id})
        .then(()=>{
            console.log('success')
            res.send();
        })
      })

    
    return authorRouter;
}
//acts as calling function as well
module.exports = router;