const express = require('express');

const { handleErrors } = require('./middlewares');
const usersRepo = require('../../repositories/users');
const homeTemplate = require('../../views/admin/auth/home');
const trackTemplate = require('../../views/admin/auth/track');
const getstartedTemplate = require('../../views/admin/auth/get-started');
const getstartedTemplate2 = require('../../views/admin/auth/getstarted2');
const shippingcostTemplate = require('../../views/admin/auth/shipping-cost');
const shippingTemplate = require('../../views/admin/auth/shipping');
const shipping2Template = require('../../views/admin/auth/shipping2');
const shipping3Template = require('../../views/admin/auth/shipping3');
const aboutusTemplate = require('../../views/admin/auth/aboutus');
const termsTemplate = require('../../views/admin/auth/terms');
const contactTemplate = require('../../views/admin/auth/contact');
const sourcingTemplate = require('../../views/admin/auth/sourcing');
const paymentTemplate = require('../../views/admin/auth/payment');
const payment2Template = require('../../views/admin/auth/payment2');
const payment3Template = require('../../views/admin/auth/payment3');
const qualityCheckTemplate = require('../../views/admin/auth/quality-check');
const qualityCheck2Template = require('../../views/admin/auth/quality-check2');
const qualityCheck3Template = require('../../views/admin/auth/quality-check3');
const manufacturingTemplate = require('../../views/admin/auth/manufacturing');
const manufacturing2Template = require('../../views/admin/auth/manufacturing2');
const manufacturing3Template = require('../../views/admin/auth/manufacturing3');
const scheduleTemplate = require('../../views/admin/auth/scheldule');
const scheldule2Template = require('../../views/admin/auth/scheldule2');
const scheldule3Template = require('../../views/admin/auth/scheldule3')
const {
  requirefullName,
  requireEmail,
  requireContact,
  requireShipment,
  requireShipmentType,
  requireEmailAddress,
  requireTrackId,
  requireWeight,
  requireDescription
} = require('./validator');

const Repository = require('../../repositories/repositories');
const shipmentRepo = new Repository('shipments.json');
const sourceRepo = new Repository('source.json');
const paymentRepo = new Repository('payment.json');
const manufacturingRepo = new Repository('manufacturing.json');
const qualityRepo = new Repository('quality.json');
const schelduleRepo = new Repository('scheldule.json');
const contactRepo = new Repository('contact.json');

const router = express.Router();

router.get('/', (req, res) => {
  res.send(homeTemplate({req}));
});

router.get('/trackShipment', ( req, res ) => {
  res.send(trackTemplate({req}));
});

router.get('/started', (req, res) => {
  res.send(getstartedTemplate({ req }));
});

router.post('/started', (req, res) => {
  const { service } = req.body;
  if (service) {
    req.session.selectedService = service;
    res.redirect('/started2');
  } else {
    res.redirect('/started');
  }
});

router.get('/started2', (req, res) => {
  res.send(getstartedTemplate2({ req }))
});

router.post('/started2', (req, res) => {
  const { timeframe } = req.body;
  const service = req.session.selectedService;
  
  if (timeframe && service) {
    req.session.timeframe = timeframe;
    
    // Redirect to different pages based on selected service
    if (service === 'Sourcing') {
      res.redirect('/sourcing');
    } else if (service === 'Payment to Suppliers') {
      res.redirect('/payment');
    } else if (service === 'Quality Check (Inspection)') {
      res.redirect('/quality-check');
    } else if (service === 'Manufacturing') {
      res.redirect('/manufacturing');
    } else if (service === 'Shipping') {
      res.redirect('/shipping');
    } else {
      res.redirect('/');
    }
  } else {
    res.redirect('/started2');
  }
});

router.get('/shippingcost', (req, res) => {
  res.send(shippingcostTemplate({ req }));
});

router.get('/sourcing', (req, res) => {
  res.send(sourcingTemplate({ req }));
});

router.post('/sourcing',
  [ requirefullName, requireEmail, requireContact ],
  handleErrors(sourcingTemplate),
  async(req, res) => {
  const { fullName, email, contact } = req.body;
  const sourcing = await sourceRepo.create({ fullName, email, contact });
  req.session.sourcingId = sourcing.id;
  res.redirect('/');
});

router.get('/payment', (req, res) => {
  res.send(paymentTemplate({ req }));
});

router.post('/payment',
  [requirefullName, requireContact  ],
  handleErrors(paymentTemplate),
  async(req, res) => {
    const { fullName, contact } = req.body;
    const payment = await paymentRepo.create({ fullName, contact });
    req.session.paymentId = payment.id;
    res.redirect('/payment2');
});

router.get('/payment2', (req, res) => {
  res.send(payment2Template({ req }));
});

router.post('/payment2',
  [requireDescription, requireShipment  ],
  handleErrors(payment2Template),
  async(req, res) => {
    const { description, shipmentType } = req.body;
    const payment = await paymentRepo.create({ description, shipmentType });
    req.session.paymentId = payment.id;

    res.redirect('/payment3');
});

router.get('/payment3', (req, res) => {
  res.send(payment3Template({ req }));
});

router.post('/payment3',
  [ requireShipment ],
  handleErrors(payment3Template),
  async(req, res) => {
    const { shipmentType } = req.body;
    const payment = await paymentRepo.create({ shipmentType });
    req.session.paymentId = payment.id;

    res.redirect('/');
});

router.get('/quality-check', (req, res) => {
  res.send(qualityCheckTemplate({ req }));
});

router.post('/quality-check',
  [requirefullName, requireEmail, requireContact  ],
  handleErrors(qualityCheckTemplate),
  async(req, res) => {
    const { fullName, email, contact } = req.body;
    const quality = await qualityRepo.create({ fullName, email, contact });
    req.session.qualityId = quality.id;
    res.redirect('/quality-check2');
});

router.get('/quality-check2', (req, res) => {
  res.send(qualityCheck2Template({ req }));
});

router.post('/quality-check2',
  [ requireShipment, requireDescription ],
  handleErrors(qualityCheck2Template),
  async(req, res) => {
    const { shipmentType, description } = req.body;
    const quality = await qualityRepo.create({ shipmentType, description });
    req.session.qualityId = quality.id;
    res.redirect('/quality-check3');
});

router.get('/quality-check3', (req, res) => {
  res.send(qualityCheck3Template({ req }));
});

router.post('/quality-check3',
  [ requireShipment, requireDescription ],
  handleErrors(qualityCheck3Template),
  async(req, res) => {
    const { shipmentType, description } = req.body;
    const quality = await qualityRepo.create({ shipmentType, description });
    req.session.qualityId = quality.id;
    res.redirect('/');
});

router.get('/manufacturing', (req, res) => {
  res.send(manufacturingTemplate({ req }));
});

router.post(
  '/manufacturing',
  [requirefullName, requireEmail, requireContact, requireShipment, ],
  handleErrors(manufacturingTemplate),
  async(req, res) => {
    const { fullName, email, contact, shipmentType } = req.body;
    const manufacturing = await manufacturingRepo.create({ fullName, email, contact, shipmentType });
    req.session.manufacturingId = manufacturing.id;
    res.redirect('/manufacturing2');
});

router.get('/manufacturing2', (req, res) => {
  res.send(manufacturing2Template({ req }));
});

router.post(
  '/manufacturing2',
  [ requireDescription, requireShipment ],
  handleErrors(manufacturing2Template),
  async(req, res) => {
    const { description, shipmentType } = req.body;
    const manufacturing = await manufacturingRepo.create({ description, shipmentType });
    req.session.manufacturingId = manufacturing.id;
    res.redirect('/manufacturing3');
});

router.get('/manufacturing3', (req, res) => {
  res.send(manufacturing3Template({ req }));
});

router.post(
  '/manufacturing3',
  [ requireShipment ],
  handleErrors(manufacturing3Template),
  async(req, res) => {
    const { shipmentType } = req.body;
    const manufacturing = await manufacturingRepo.create({ shipmentType });
    req.session.manufacturingId = manufacturing.id;
    res.redirect('/');
});

router.get('/shipping', (req, res) => {
  res.send(shippingTemplate({ req }));
});

router.post(
  '/shipping',
    [requirefullName, requireEmail, requireContact, requireShipment],
    handleErrors(shippingTemplate),
    async (req, res) => {
      const { fullName, email, contact, shipmentType } = req.body;
      const shipment = await shipmentRepo.create({ fullName, email, contact, shipmentType });
      req.session.shipmentId = shipment.id;
      res.redirect('/shipping2');
});

router.get('/shipping2', (req, res) => {
  res.send(shipping2Template({ req }));
});

router.post(
  '/shipping2',
    [requirefullName, requireEmail, requireContact, requireShipment],
    handleErrors(shippingTemplate),
    async (req, res) => {
      const { fullName, email, contact, shipmentType } = req.body;
      const shipment = await shipmentRepo.create({ fullName, email, contact, shipmentType });
      req.session.shipmentId = shipment.id;
      res.redirect('/shipping3');
});

router.get('/shipping3', (req, res) => {
  res.send(shipping3Template({ req }));
});

router.post('/shipping3',
    [requireWeight, requireShipmentType, requireEmailAddress, requireTrackId],
    handleErrors(shipping3Template),
    async (req, res) => {
      const { weight, shipmentType, email, trackId } = req.body;
      
      res.redirect('/');
});

router.get('/scheldule', (req, res) => {
  res.send(scheduleTemplate({ req }));
});

router.post('/scheldule', 
  async ( req, res ) => {
    const { service } = req.body;
      req.session.selectedService = service;
      const services = await schelduleRepo.create({ service });
      req.session.servicesId = services.id;
      res.redirect('/scheldule2')
});

router.get('/scheldule2', (req, res) => {
  res.send(scheldule2Template({ req }))
});

router.post('/scheldule2',
  async( req, res ) => {
    const { timeframe } = req.body;
    const services = await schelduleRepo.create({ timeframe });
    req.session.servicesId = services.id;
    res.redirect('/scheldule3')
  }
);

router.get('/scheldule3', (req, res) => {
  res.send(scheldule3Template({ req }));
});

router.post('/scheldule3',
  [ requirefullName, requireEmail, requireContact ],
  handleErrors(scheldule3Template),
  async(req, res) => {
    const { fullName, contact, email } = req.body;
    const services = await schelduleRepo.create({ fullName, contact, email });
    req.session.servicesId = services.id;
    res.redirect('/');
});

router.get('/contact', (req, res) => {
  res.send(contactTemplate({ req }));
});

router.post('/contact', 
  [ requirefullName, requireContact, requireEmail ],
  handleErrors(contactTemplate),
  async ( req, res ) => {
    const { fullName, contact, email, message } = req.body;
      const contacts = await contactRepo.create({ fullName, contact, email, message });
      req.session.contactsId = contacts.id;
      res.redirect('/')
});

router.get('/aboutus', (req, res) => {
  res.send(aboutusTemplate({ req }));
});

router.get('/terms', (req, res) => {
  res.send(termsTemplate({ req }));
});

module.exports = router;