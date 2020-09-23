const express = require('express');

var app = express();


app.get('/', (req, res)=>{
    res.status(404).send({
        error: 'Page not found.',
        name: 'Example test.'
    });
});

app.get('/users', (req, res)=>{
    res.send([
        {name: 'Mavewrick', age: 20},
        {name: 'Bob', age:38},
        {name: 'Sally', age: 22}
    ])
})


app.listen(3000);

module.exports.app = app;