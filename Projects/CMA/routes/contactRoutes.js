const express = require('express');
const router = express.Router();

const {getContacts, getContact, createContact, updateContact, deleteContact} = require('../controllers/contactController');

const validateToken = require('../middleware/validateTokenHandler');
router.use(validateToken);
// GET all Contact | GET
router.route('/').get(getContacts);

// Get Contact | GET
router.route('/:id').get(getContact);

// Create New Contact | POST
router.route('/').post(createContact);

// Update Contact | PUT
router.route('/:id').put(updateContact);

// Delete Contact | DELETE
router.route('/:id').delete(deleteContact);


module.exports = router;
