const express = require('express');
const path = require('path');
const customerRoutes = require('./routes/customerRoutes');

const app = express();

app.use(express.json());

// Setting ejs as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

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
        date: new Date().getDay() + '/' + new Date().getMonth() + '/' + new Date().getFullYear() + ' ' + new Date().getHours() + ':' + new Date().getMinutes(),
        sides: sides,
        meals: meals,
        drinks: drinks
    });
});