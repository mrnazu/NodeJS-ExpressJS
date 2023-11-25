const express = require('express');
const uuid = require('uuid');
const members = require('../../members');
const router = express.Router();

// Gets all members
router.get('/', function(req, res){
    res.json(members);
});

// Get single member
router.get('/:id', function(req, res){
    const found = members.some(member => member.id === parseInt(req.parms.id));
    if (found){   
        res.json(members.filter(member => member.id === parseInt(req.parms.id)));
    }else{
        res.status(400).json({msg: `No member with the id of ${req.parms.id}`});
    }
    
});


// Create Member
router.post('/', function(req, res){
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    };
    
    if (!newMember.name || !newMember.email){
        return res.status(400).json({msg: `Please include name and email`});
    };
    members.push(newMember);
    res.json(members);
});


// Update Member
router.put('/:id', function(req, res){
    const found = members.some(member => member.id === parseInt(req.parms.id));
    if (found){   
        const updateMember = req.body;
        members.forEach(members => {
            if (member.id === parseInt(req.parms.id)){
                member.name = updateMember.name ? updateMember.name : member.name;
                member.email = updateMember.email ? updateMember.email : member.email;
                
                res.json({msg: `Member updated! ${member}`})
            }
            
        });
    }else{
        res.status(400).json({msg: `No member with the id of ${req.parms.id}`});
    }
    
});


// Delete Member
router.delete('/:id', function(req, res){
    const found = members.some(member => member.id === parseInt(req.parms.id));
    if (found){  
        res.json({
        msg: 'Member Deleted', 
        members: members.filter(member => member.id !== parseInt(req.parms.id))
        });
    }else{
        res.status(400).json({msg: `No member with the id of ${req.parms.id}`});
    }
    
});




module.exports = router;
