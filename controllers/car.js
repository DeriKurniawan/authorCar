'use strict'
const models = require('../models');

module.exports = {
  getAll: (req, res, next)=>{
    models.Car.findAll()
    .then((data)=>{
      res.send(data);
    })
    .catch((err)=>{
      res.send(err);
    })
  },
  toCreate: function(req, res, next){
    let body = req.body
    models.Car.create({
      name: body.name,
      manufacture: body.manufacture,
      category: body.category,
      silinder: body.silinder,
      image: body.image,
      description: body.descrition,
      status: body.status || true,
      price: body.price,
      author: body.author
    })
    .then((data)=>{
      res.send(data)
    })
    .catch((err)=>{
      res.send(err)
    })
  },
  updateOne: function(req, res, next){
    models.Car.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((data)=>{
      console.log(data)
      let body = req.body
      let value = data.dataValues
      data.updateAttributes({
        name: body.name || value.name,
        manufacture: body.manufacture || value.manufacture,
        category: body.category || value.category,
        silinder: body.silinder || value.silinder,
        image: body.image || value.image,
        description: body.descrition || value.description,
        status: body.status || true,
        price: body.price || value.price,
        author: body.author || value.author
      })
      .then((query)=>{
        res.send(query)
      })
      .catch((err)=>{
        res.send(err)
      })
    })
  },
  deleteOne: function(req, res, next){
    models.Car.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(()=>{
      models.Car.findAll()
      .then((data)=>{
        res.send(data)
      })
      .catch((err)=>{
        res.send(err)
      })
    })
    .catch((err)=>{
      res.send(err)
    })
  }
}
