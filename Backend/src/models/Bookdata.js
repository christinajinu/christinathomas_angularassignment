const mongoose = require('mongoose');
//DB Connection
mongoose.connect('mongodb+srv://userone:userone@casestudychristina.zlpng.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const BookSchema =  new Schema({
     id:Number,
     title: String,
     author: String,
     genre: String,
     image: String
     
});

//Model
var Bookdata = mongoose.model('bookdata',BookSchema);

module.exports = Bookdata;