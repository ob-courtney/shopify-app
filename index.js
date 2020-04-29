// index.js

/**
 * Required External Modules
 */

const express = require('express');
const path = require('path');
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || '8000';

var shop
var apikey
var password

/**
 *  App Configuration
 */

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());
app.use(express.json());

/**
 * Routes Definitions
 */

app.get('/', (req, res) => {
    res.render('index', {title: 'Home'});
  });

app.get('/user', (req, res) => {
    res.render('user', { title: 'Profile', userProfile: { nickname: 'Orderbot' } });
});

app.get('/save-credentials', function(req, res){
    shop = req.query.user.shop;
    apikey = req.query.user.apikey;
    password = req.query.user.password;

    res.send('Shop entered');
});

/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });



