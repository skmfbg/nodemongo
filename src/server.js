const http=require('http');
const express=require('express');
const app=express()
const server=http.createServer(app);
const conn=require('./conn');
const Customer=require('./model');




app.use(express.static(__dirname+"/views"));

app.use(express.urlencoded({extended:true}));

app.set('view engine','hbs');
app.set('views',__dirname+"/views");

app.get('/',async (req,res)=>{
  const data=await Customer.find();
  res.render('index',{user:data});
})


app.post('/register',async (req,res)=>{
  
  try{
    const data=new Customer(req.body);
    let result=await data.save();
  }catch{
    console.log("data not saved..");
  }

  res.redirect('/');
})

app.get('/delete/:name',async (req,res)=>{

  try{
    const data=await Customer.deleteOne({name:req.params.name});
  }catch{
    console.log("data not deleted");
  }

  res.redirect('/')
});


app.post('/update/:name',async (req,res)=>{

  const data=await Customer.updateOne(
    {_id:req.params.name},
    {$set:req.body}
    )

  res.redirect('/');

});


app.get('/edit/:name',async (req,res)=>{
  const u=await Customer.find({name:req.params.name});
  res.render('index',{udata:u});
})


server.listen(process.env.PORT || 8000,(err)=>{
  console.log('listning..')
});

