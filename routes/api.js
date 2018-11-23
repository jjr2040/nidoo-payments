const express = require('express');
const ZoneFee = require('../schemas/ZoneFee');

const router = express.Router();

//Booking api
router.post('/zonefee', (req, res) => {
  let zoneFee = new ZoneFee(req.body);
  zoneFee.save();
  res.status(201).send(zoneFee);
});

module.exports = router;