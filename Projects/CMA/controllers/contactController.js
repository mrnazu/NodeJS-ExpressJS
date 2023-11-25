const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

// @desc Get all contacts
// @route GET /api/contacts
// @access public
const getContacts = asyncHandler(async function(req, res){
    const contacts = await Contact.find({ user_id: req.user.id });
    res.status(200).json(contacts);
});


// @desc Get contact
// @route GET /api/contacts/:id
// @access public
const getContact = asyncHandler(async function(req, res){
     const contact = await Contact.findById(req.params.id);
     if (!contact){
        res.status(404);
        throw new Error("Contact Not Found!");
     }
    res.status(200).json(contact);
});


// @desc Create New contact
// @route POST /api/contacts/
// @access public
const createContact = asyncHandler(async function(req, res){
    console.log("The Request Body is: ", req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone){
        res.status(400);
        throw new Error("All Fields are mandatory!");
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id
    });
    res.status(201).json(contact);
});


// @desc Update contact
// @route PUT /api/contacts/:id
// @access public
const updateContact = asyncHandler(async function(req, res){
    const contact = await Contact.findById(req.params.id);
    if (!contact){
        res.status(404);
        throw new Error("Contact not Found");
    }
    if (contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User don't have permission to update other user contacts");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.status(200).json(updatedContact);
});


// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = asyncHandler(async function(req, res){
    const contact = await Contact.findById(req.params.id);
    if (!contact){
        res.status(404);
        throw new Error("Contact not Found");
    }
    if (contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User don't have permission to update other user contacts");
    }    
    await Contact.deleteOne({ _id: req.parms.id });
    res.status(200).json(contact); 
});

module.exports = {getContacts, getContact, createContact, updateContact, deleteContact};
