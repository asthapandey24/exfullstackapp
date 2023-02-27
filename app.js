const express=require('express');
const app=express();

//const dataRoutes = require('./Router/data.js'); //  importing the file from router folder


const bodyParser=require('body-parser');

var cors = require('cors');


const sequelize = require('./util/database.js')
const User = require('./models/User.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//app.use(dataRoutes);


 //without using routing
  app.post('/user/add-user',async(req,res,next)=>{          
           const name = req.body.name;
           const email =  req.body.email;
           const data = await User.create({name: name, email: email});
          res.status(201).json({details: data})

         })

 app.get('/user/get-data', async(req, res, next)=>{

     const users = await User.findAll();
     res.status(200).json({details: users})
 }) 

 app.delete('/user/delete-user/: id', async(req, res) =>{
 const user_Id = req.params.id;
 await User.destroy({where: {id: user_Id}})
 res.json({msg:"delete successfull"});
 })


sequelize.sync().then((result)=>{
    console.log("-------"+result);
    app.listen(4000);
}).catch(err=>{
    console.log(err);
});