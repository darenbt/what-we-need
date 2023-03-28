const Toget = require('../models/Toget')

module.exports = {
  getItems : async (req,res)=>{
    try {
      const togetItems = await Toget.find()
      const itemsLeft = await Toget.countDocuments({completed: false})
      res.json({ items: togetItems})
      //don't need res.render for react
      // res.render('toget.ejs', {getThis: togetItems, left: itemsLeft})
    }catch(err){
      console.log(err)
    }
  },
  createItem: async (req,res)=>{
    try{
      const toget = await Toget.create({toget: req.body.togetItem, completed: false })
      console.log('New item has been added!')
      res.json(toget)
    }catch(err){
      console.log(err)
    }
  },
  markComplete: async (req,res)=>{
    try{
      await Toget.findOneAndUpdate({_id:req.body.togetIdFromJSFile},{
        completed: true
      })
      console.log('Got it!')
      res.json('Got it!')
    }catch(err){
      console.log(err)
    }
  },
  markIncomplete: async (req,res)=>{
    try{
      await Toget.findOneAndUpdate({_id:req.body.togetIdFromJSFile},{
        completed: false
      })
      console.log('Marked Incomplete')
      res.json('Marked Incomplete')
    }catch(err){
      console.log(err)
    }
  },
  deleteItem: async (req,res)=>{
    try{
      await Toget.findOneAndDelete({_id:req.body.togetIdFromJSFile})
      console.log('Deleted Item')
      res.json('Deleted Item')
    }catch(err){
      console.log(err)
    }
  }
}
