const express =require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
const md5=require('md5')

const bodyParser=require('body-parser')

app.use(cors())
app.use(bodyParser.json())


// connection establishment

mongoose.connect("mongodb://localhost:27017/productDB",(error)=>{
if(error){
console.log(error);}  
else{
console.log("succesfully connected to database");    
}  
})

const userSchema=new mongoose.Schema({
username:String,
email:String,
password:String,
place:String,
products:[]   
})
const User=mongoose.model('User',userSchema)


// registration

app.post("/registration",(req,res)=>{
User.findOne({email:req.body.email},(error,foundUser)=>{
if(foundUser){
res.status(200).send("user already exists");    
}else{
const newUser=new User({
username:req.body.username,
email:req.body.email,
password:md5(req.body.password),
place:req.body.place
})

newUser.save();
res.status(201).send("successfully registered")

}})})


// login

app.post("/login",(req,res)=>{
User.findOne({email:req.body.email},(error,foundUser)=>{
if(error){
res.send(error)}
else{
if(foundUser){
if(foundUser.password===md5(req.body.password)){

res.status(201).send("login sucessful")

}
else{
    res.status(200).send("Invalid password")  
} }

else{

  
    res.status(200).send("User doenot exist ")
  
}} } )}) 
    
 

// add product

    app.post("/products",(req,res)=>{
    User.findOne({email:req.body.email},(error,foundUser)=>{
    if(foundUser){

    console.log(foundUser);    
    const {products}=foundUser
    const newArr=[]
    products.forEach((item)=>{
    newArr.push(item.productname)    
    })
    console.log(newArr);
    console.log(newArr.includes(req.body.productname));
    if(!newArr.includes(req.body.productname)){

        foundUser.products.push({
            productname:req.body.productname,
            productprice:parseInt(req.body.productprice),
            quantity:parseInt(req.body.quantity),
            category:req.body.category});
           foundUser.save();
           res.status(201).send("product added successfully");    
   

   
}
else{

    res.status(200).send("product already exists");}
      

    }
   
   
} 



)})
    
// viewproduct

app.post("/viewproducts",(req,res)=>{
User.findOne({email:req.body.email},(error,foundUser)=>{
if(foundUser){
    
        console.log(foundUser);    
        const {products}=foundUser
        res.send(products)
}})})




    


app.listen(4000,()=>{
console.log("server started at 4000");    
})
 

