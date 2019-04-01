/*jshint esversion: 6 */
/*jshint esversion: 7 */
/*jshint esversion: 8 */
/*jshint esversion: 9 */
const express = require('express');

const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Ian'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(8181, () => {
    console.log('Listening from port 8181!!!');
    
});