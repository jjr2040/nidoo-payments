const express = require('express');
const ZoneFee = require('../schemas/ZoneFee');
const helper = require('sendgrid').mail;

const router = express.Router();

//Booking api
router.post('/zonefee', (req, res) => {

  let newZoneFee = new ZoneFee(req.body);
  newZoneFee.createdAt = Date();
  newZoneFee.createdBy = "5bf89a8c5c25b800235e18c9";
  newZoneFee.save();
  console.log(`User with id: ${newZoneFee.createdBy} created a new zone fee`);
  res.status(201).send(newZoneFee);

  // ZoneFee.findOne({ zone: req.body.zone }, (err, zoneFee) => {
  //   if (zoneFee) {
  //     zoneFee.fee = req.body.fee;
  //     zoneFee.save();
  //     res.status(201).send(zoneFee);
  //   } else {
  //     let newZoneFee = new ZoneFee(req.body);
  //     newZoneFee.save();
  //     res.status(201).send(newZoneFee);
  //   }
  });

  
  const from_email = new helper.Email('jj.villegas47@uniandes.edu.co');
  const to_email = new helper.Email('jj.villegas47@uniandes.edu.co');
  const subject = 'Nidoo: Han cambiado las tarifas por zona';
  const content = new helper.Content('text/plain', 'Han cambiado las tarifas por zona. Verifica que no haya sido un error');
  const mail = new helper.Mail(from_email, subject, to_email, content);

  const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
  const request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON(),
  });

  sg.API(request, function(error, response) {
    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);
  });
});

module.exports = router;