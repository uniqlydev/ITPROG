const express = require('express');
const path = require('path');
const customerRoutes = require('./routes/customerRoutes');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());

// Setting ejs as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8080;


//dont touch this Frontend
app.use('/api', customerRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// Routing view
app.get('/', (req, res) => {
    let totalpr = 0;
    let discountpr = 0;
    const sides = ["Baked Potato","Mashed Potato","Steamed Vegetables"];
    const meals = ["Steak","Salmon","Chicken"];
    const drinks = ["Iced Tea", "Root Beer", "Water"];

    res.render('home/index', {
        title: 'Home',
        total: totalpr,
        discount: discountpr,
        date: new Date().toLocaleDateString('en-PH', { timeZone: 'Asia/Manila' }),
        sides: sides,
        meals: meals,
        drinks: drinks
    });
});

// Handle post from home to order_success
app.post('/customer2', (req, res) => {
    // Access the data sent in the request body
    const meal = req.body.meal;
    const mquan = req.body.mquan;
    const drink = req.body.drink;
    const dquan = req.body.dquan;
    const sides = req.body.sides;
    const squan = req.body.squan;
    const total = req.body.total;
  
    // Do something with the data (e.g., store it, process it, etc.)
    console.log('Received data:', req.body);
  
    // Send a response if needed
    res.send('Data received successfully.');
  });
  