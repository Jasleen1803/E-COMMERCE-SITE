const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs'); // Use EJS
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// Define routes properly
app.get('/', (req, res) => {
    res.render('index'); // homepage
});

app.get('/productlist', (req, res) => {
    res.render('PRODUCTLIST');
});

app.get('/checkout', (req, res) => {
    res.render('checkout');
});

app.get('/thankupage', (req, res) => {
    res.render('thankupage');
});

app.get('/contentpage', (req, res) => {
    res.render('contentpage');
});

app.get('/cart', (req, res) => {
    res.render('cart');
});

app.get('/productdetails', (req, res) => {
    res.render('productdetails');
});

app.get('/product1', (req, res) => {
    res.render('product1');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
