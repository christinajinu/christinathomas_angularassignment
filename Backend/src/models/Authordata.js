const mongoose = require('mongoose');
//DB Connection
mongoose.connect('mongodb+srv://userone:userone@casestudychristina.zlpng.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
// mongoose.connect('mongodb+srv://userone:userone@cluster0.akfoz.mongodb.net/libraryapp?retryWrites=true&w=majority');
//Schema
const Schema = mongoose.Schema;

const AuthorSchema =  new Schema({
    id:Number,
     name: String,
     genre: String,
     books: String,
     image:String
});

//Model
var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;

