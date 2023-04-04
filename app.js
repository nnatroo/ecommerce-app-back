const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
    // code to retrieve all users from database
    res.send('/api/users');
});

app.post('/api/users', (req, res) => {
    // code to create a new user in the database
    res.send('User created successfully');
});

app.put('/api/users/:id', (req, res) => {
    // code to update a user in the database
    res.send('User updated successfully');
});

app.delete('/api/users/:id', (req, res) => {
    // code to delete a user from the database
    res.send('User deleted successfully');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});