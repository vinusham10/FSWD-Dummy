const express = require('express');
const router = express.Router();

let users = [
    {
        id:1,
        name:"Vinusha",
        rollno: 25,
        email:"vinusham05@gmail.com"
    }
]; // Example data (you would typically use a database)

// Create operation - POST
router.post('/users', (req, res) => {
    const {name,rollno,email} = req.body;
    if(!name || !email || !rollno ){
        return res.status(404).json({message:"Details are required"})
    }
    const newUser = {
        id:users.length + 1, 
        name: name, 
        rollno: rollno, 
        email:email
    }
    users.push(newUser);
    res.status(201).json(newUser);
});

// Read operation - GET
router.get('/users', (req, res) => {
    res.status(200).json(users);
});

// Read operation - GET
// get request to read specific user data
router.get('/users:id', (req, res) => {
    const userId = parseInt(req.params.id)
    const user = users.find(user=>user.id === userId)
    if(!user){
        return res.status(404).json({message:"User not found"})
    }
    res.status(200).json(users);
});

// Update operation - PUT
router.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const {name,email} = req.body;
    const user = users.find(user => user.id===userId)
    const updatedItem = req.body;
    // if(!user){
    //     return res.send
    // }
    users[userId] = updatedItem;
    res.json(updatedItem);
});

// Delete operation - DELETE
router.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    users.splice(userId, 1);
    res.sendStatus(204);
});

module.exports = router;
