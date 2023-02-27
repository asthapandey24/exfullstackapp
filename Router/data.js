// const express = require('express');

// const router = express.Router();
// //var cors = require('cors');

// const sequelize = require('../models/User.js')

// //router.use(cors());

// router.post('/users/add-user',async(req,res,next)=>{          
//     const name = req.body.name;
//     const email =  req.body.email;
//     const data = await sequelize.create({name: name, email: email});
//     res.status(201).json({details: data})

//    })

// router.get('/users/get-data', async(req, res, next)=>{

// const users = await sequelize.findAll();
// res.status(200).json({details: users})
// })

// router.delete('/users/deleteuser/(:id)', async (req, res,next) =>{
//     var uId = req.params.id
//     await sequelize.destroy({where:  {id: uId}})
//       res.status(200)
//     })



// module.exports  =  router