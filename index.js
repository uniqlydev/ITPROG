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



app.use('/api', customerRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// Routing view
app.get('/', (req, res) => {
    res.render('home/index', {
        title: 'Home'
    });
});