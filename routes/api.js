const express = require('express');
const ZoneFee = require('../schemas/ZoneFee');

const router = express.Router();

//Booking api
router.post('/zonefee', (req, res) => {

  ZoneFee.findOne({ zone: req.body.zone }, (err, zoneFee) => {
    if (zoneFee) {
      zoneFee.fee = req.body.fee;
      res.status(201).send(zoneFee);
    } else {
      let newZoneFee = new ZoneFee(req.body);
      newZoneFee.save();
      res.status(201).send(newZoneFee);
    }
  });

  
});

module.exports = router;