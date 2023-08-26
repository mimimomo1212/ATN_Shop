var express = require('express');
const lego = require('../models/Lego');
const model = require('../models/Model');
const car = require('../models/Car');
const { set } = require('../app');
var router = express.Router();

router.get('/', async (req, res) => {
   try {
      const legoToys = await lego.find();
      const modelToys = await model.find();
      const carToys = await car.find();
      res.render('toy/home', { legoToys, modelToys, carToys });
   } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
   }
});

router.get('/detail/:id', async (req, res) => {
   const id = req.params.id;
   const toys = await lego.findById(id) || await model.findById(id) || await car.findById(id);
   if (toys.type == 'Lego') {
      res.render('toy/Detail', { toy: toys });
   } if (toys.type == 'Model') {
      res.render('toy/Detail', { toy: toys });
   }if(toys.type == 'Car'){
      res.render('toy/Detail',{toy :toys})
   }
});

router.get('/home', async (req, res) => {
   try {
      const carToys = await car.find();
      const legoToys = await lego.find();
      const modelToys = await model.find();
      res.render('toy/home', { legoToys, modelToys, carToys });
   } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
   }
});

router.get('/list', async (req, res) => {
   try {
      const carToys = await car.find();
      const legoToys = await lego.find();
      const modelToys = await model.find();
      res.render('toy/List', { legoToys, modelToys ,carToys });
   } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
   }
});
router.post('/add', async (req, res) => {
   const { type, ...toy } = req.body;
   try {
      if (type === 'Lego') {
         await lego.create({ ...toy, type: 'Lego' });
      } else if (type === 'Model') {
         await model.create({ ...toy, type: 'Model' });
      } else if (type === 'Car') {
         await car.create({ ...toy, type: 'Car' });
      }
      console.log('Add successfully !');
      res.redirect('/List');
   } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
   }
});

router.get('/add', (req, res) => {
   res.render('toy/Add');
});

module.exports = router;