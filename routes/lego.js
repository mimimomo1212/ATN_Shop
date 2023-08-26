const express = require('express');
const legoModels = require('../models/Lego');
const router = express.Router();


router.get('/delete/Lego/:id', async (req, res) => {
   try {
      await legoModels.findByIdAndDelete(req.params.id);
      res.redirect('/List');
   } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
   }
});

router.get('/update/Lego/:id', async (req, res) => {
   try {
      const id = req.params.id;
      const toy = await legoModels.findById(id);
      res.render('toy/UpdateLego', { toy: toy });
   } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
   }
});

router.post('/update/Lego/:id', async (req, res) => {
   try {
      await legoModels.findByIdAndUpdate(req.params.id, req.body);
      console.log('Edit successfully !');
      res.redirect('/List');
   } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
   }
});


module.exports = router;

