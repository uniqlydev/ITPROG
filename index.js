const express = require('express');
const path = require('path');
const customerRoutes = require('./routes/customerRoutes');
const customerController = require('./controllers/customerController');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json);
app.use(bodyparser.urlencoded({ extended: false }));

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
    res.render('home/index', {
        title: 'Home',
    });
});

app.post('/', (req, res) => {
    
});