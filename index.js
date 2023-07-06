const express = require('express');
const path = require('path');
const customerRoutes = require('./routes/customerRoutes');
const foodRoutes = require('./routes/foodRoutes');
const bodyParser = require('body-parser');
const db = require('./database/db');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Setting ejs as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 8080;

// Use the customerRoutes for API requests
app.use('/api', customerRoutes);
app.use('/api', foodRoutes);

// Routing for views
app.get('/', async (req, res) => {
    let totalpr = 0;
    let discountpr = 0;

    fetchFoodsFromDatabase((err, foods) => {
        if (err) {
            console.log(err);
            res.render('home/index', {
                title: 'Home',
                total: totalpr,
                discount: discountpr,
                date: new Date().toLocaleDateString('en-PH', { timeZone: 'Asia/Manila' }),
            });
        }else {
            console.log("Foods: ", foods);
            res.render('home/index', {
                title: 'Home',
                total: totalpr,
                discount: discountpr,
                date: new Date().toLocaleDateString('en-PH', { timeZone: 'Asia/Manila' }),
                foods: foods
            });
        }
    });
});

function fetchFoodsFromDatabase(callback) {
    db.query('SELECT * FROM Food', (err, foods) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, foods);
      }
    });
  }

// Handle post from home to checkout
app.post('/checkout', (req, res) => {
    // Print order to console
    console.log(req.body);

    // Get variables
    const meal = req.body.meal;
    const sides = req.body.sides;
    const drink = req.body.drink;
    const mquan = req.body.mquan;
    const squan = req.body.squan;
    const dquan = req.body.dquan;
    const total = req.body.total;

    // Render order_success.ejs
    res.render('payment/checkout', {
        title: 'Checkout',
        meal: meal,
        sides: sides,
        drink: drink,
        mquan: mquan,
        squan: squan,
        dquan: dquan,
        total: total,
    });
});

app.get('/about', (req, res) => {

    res.render('about/about', {
        title: 'About Us'
    });

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
