const { check } = require('express-validator');

module.exports = {
    requireEmail: check('email')
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage('Must be a valid email address'),
    requirefullName: check('fullName')
        .trim()
        .isLength({ min: 4, max: 25 })
        .withMessage('Must be between 4 and 10 characters'),
    requireContact: check('contact')
        .trim()
        .isLength({ min: 11, max: 11 })
        .withMessage('Must be exactly 11 characters'),
    requireShipment: check('shipmentType')
        .isIn(['Sea Shipment', 'Air Shipment'])
        .withMessage('Invalid category selected'),
    requireWeight: check('weight')
        .trim()
        .isFloat({ min: 0.1 }),
    requireTrackId: check('track-id')
        .trim()
        .isLength({ min: 5, max: 20 })
        .withMessage('Must be between 5 and 20 characters'),
    requireShipmentType: check('shipmentType')
        .isIn(['Sea Shipment', 'Air Shipment'])
        .withMessage('Invalid shipment type selected'),
    requireEmailAddress: check('email')
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage('Must be a valid email address'),
    requireDescription: check('description')
        .trim()
        .notEmpty()
        .withMessage('Description must no be empty')                        
}