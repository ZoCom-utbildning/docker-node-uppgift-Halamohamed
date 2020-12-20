const express = require('express');

const PORT = process.env.PORT || 3000;

const Roll = require('roll');

var roll = new Roll();

const app = express();

app.use(express.json());
//app.use(express.static('public'));

app.get('/', (req,res) => {
    res.send('<h1>HELLO WORLD!</h1>');
});

app.get('/roll', (req,res) => {
   ;
    var oneDie =  roll.roll('d6');
    res.json({
        result: oneDie.result});
})
app.get('/roll/:side', (req,res) => {
    var sides =  req.params.side;

    const oneDie =  roll.roll(`d${sides}`);
    res.json({
        result: oneDie.result});
})
app.get('/towdies', (req,res) => {
    
    var towDie =  roll.roll('2d20');
    res.json({
        result: towDie.result});
})
app.listen(PORT, () => {
    console.log('on Port ' + PORT);
})