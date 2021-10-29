const Article = require('../model/TweetSchema');

const getHomePage = function(req,res){
   Article.find()
    .then (articelArr => {
    res.render('Homepage',{pageTitle:'Tweeter',articelArr})
    })
    .catch(err=>console.log(err))

}

const getnewarticle = function(req,res){
  if(req.method === 'GET'){
     res.render('Newarticle' , {errors:null })
  };
  if(req.method === 'POST'){
       console.log(req.body)
       const article = new Article(req.body);
       console.log(article)

       article.save()
         .then(()=>{
            res.redirect('/')
          })
         .catch(err => {
           const errors = {};
          //  console.log(err.errors.title.properties.message)
            // console.log(Object.values(err.errors));
            Object.values(err.errors).forEach(data =>{
              errors[data.properties.path] = data.properties.message;
            })
               res.render('Newarticle' , {errors})
          })
    }

}


const ShowOne = (req, res)=>{
  console.log(req.params.id)
  
  Article.findById(req.params.id)
    .then(article =>{

        res.render('ShowArticle' ,{title:'Show Article' , article })
      
    })
    .catch(err => console.log(err));
}


const delArticle = (req, res) => {
  console.log(req.params.id)
   Article.findOneAndDelete(req.params.id)
   .then(() => res.redirect('/'))
   .catch(err => console.log(err));

}

const updateArticle = (req , res) => {
     if (req.method === 'GET'){ 
      console.log(req.params.id)
       Article.findById(req.params.id )
       .then(result => {
        res.render('updateForm',{title:'updat', result ,errors:null})
        })
        .catch(err => console.log(err));
       };

       if(req.method === 'POST'){
          console.log(req.body, req.params.id)
          Article.findByIdAndUpdate(req.params.id , req.body ,{runValidators:true})
          .then(() => res.redirect('/') )
          
       .catch(err => {
                const errors = {};
                Object.values(err.errors).forEach( error => {
                    errors[error.properties.path] = error.properties.message;
                })
                Article.findById(req.params.id)
                    .then( result => {
                        res.render('updateForm', {result, errors})
                    })
                    .catch(err => console.log(err))
            })
       }
       

}




module.exports={
    getHomePage,
    getnewarticle,
    ShowOne ,
    delArticle,
    updateArticle,
    
}

