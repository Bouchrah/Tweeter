const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Tweet = new Schema({
 title:{
     type:String,
     required:[true, 'please write a  title here!'],
     minlength:[20, 'The title should  be 20 characters !']

    
 },
 article:{
   type:String,
     required:[true, 'please write an article here!'],
     maxlength:[50, 'The title should be 50 characters !']
 }
} , { timestamps: true});

const Article = mongoose.model('ourarticle',Tweet);
module.exports = Article;
