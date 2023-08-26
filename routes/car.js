const express = require('express');
const carModels = require('../models/Car');
const router = express.Router();


router.get('/delete/Car/:id', async (req, res) => {
   try {
      await carModels.findByIdAndDelete(req.params.id);
      res.redirect('/List');
   } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
   }
});

router.get('/update/Car/:id', async (req, res) => {
   try {
      const id = req.params.id;
      const toy = await carModels.findById(id);
      res.render('toy/UpdateCar', { toy: toy });
   } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
   }
});

router.post('/update/Car/:id', async (req, res) => {
   try {
      await carModels.findByIdAndUpdate(req.params.id, req.body);
      console.log('Edit successfully !');
      res.redirect('/List');
   } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
   }
});


module.exports = router;