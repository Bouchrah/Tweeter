const express = require('express');
const router = require('./router');
const mongoose = require('mongoose');

//init app
const app = express();




//set public folder
app.use(express.static('public'));

app.set('view engine','ejs');
app.use(express.urlencoded({extended : true}));
app.use(router);



app.get('/',function(req,res){
res.render('Homepage',{pageTitle:'Tweet'})
})



//server
const port = 3000;
app.listen(port,()=>{
    console.log('server start ');
});


//mongo db   
 const dburl = 'mongodb://localhost/test';
   mongoose.connect(dburl)
  
  .then(()=> console.log('conecct dburl'))
   .catch(err => console.log(err));

