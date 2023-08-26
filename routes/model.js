const express = require('express');
const model = require('../models/Model');
const router = express.Router();


router.get('/delete/Model/:id', async (req, res) => {
   try {
      await model.findByIdAndDelete(req.params.id);
      res.redirect('/List');
   } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
   }
});

router.get('/update/Model/:id', async (req, res) => {
   try {
      const id = req.params.id;
      const toy = await model.findById(id);
      res.render('toy/UpdateModel', { toy: toy });
   } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
   }
});

router.post('/update/Model/:id', async (req, res) => {
   try {
      await model.findByIdAndUpdate(req.params.id, req.body);
      console.log('Edit successfully !');
      res.redirect('/List');
   } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
   }
});
module.exports = router;

