const express = require('express');
//Initializing express
const app = express();
const fetch = require("node-fetch");
//Path module
const path = require('path');

//Access public files like css
app.use(express.static(__dirname + '/public'));


//Create route handlers
app.get('/', (req, res) => {
    //send the rendered view to HTML client
    res.render('index');
});

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Get User Data
app.get('/users', (req, res) => {
    const baseUrl = 'https://jsonplaceholder.typicode.com/users/';
//Fetching data from API
    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {

            res.render('users', {
                title: 'Users Data',
                users: data
            });
        })
        .catch(err => {
            res.redirect('/error');
        });

});

//Get Posts Data
app.get('/posts', (req, res) => {
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {

            res.render('posts', {
                title: 'Posts Data',
                posts: data
            });
        })
        .catch(err => {
            res.redirect('/error');
        });

});

//Get Comments Data
app.get('/comments', (req, res) => {
    const baseUrl = 'https://jsonplaceholder.typicode.com/comments';

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {

            res.render('comments', {
                title: 'Comments Data',
                comments: data
            });
        })
        .catch(err => {
            res.redirect('/error');
        });

});

//Get Albums Data
app.get('/albums', (req, res) => {
    const baseUrl = 'https://jsonplaceholder.typicode.com/albums';

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {

            res.render('albums', {
                title: 'Albums Data',
                albums: data
            });
        })
        .catch(err => {
            res.redirect('/error');
        });

});

//Get Photos Data
app.get('/photos', (req, res) => {
    const baseUrl = 'https://jsonplaceholder.typicode.com/photos';

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {

            res.render('photos', {
                title: 'Photos Data',
                photos: data
            });
        })
        .catch(err => {
            res.redirect('/error');
        });

});

//Get Todos Data
app.get('/todos', (req, res) => {
    const baseUrl = 'https://jsonplaceholder.typicode.com/todos';

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {

            res.render('todos', {
                title: 'Todos Data',
                todos: data
            });
        })
        .catch(err => {
            res.redirect('/error');
        });

});

app.get('/error', (req, res) => {
    //send the rendered view to HTML client if error occures
    res.render('error');
});

//Listing on this port
const port = process.env.PORT || 3000 ;
app.listen(port, () => console.log(`Listning on port ${port}...`));