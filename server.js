const express = require('express');
const bodyParser = require('body-parser') ;
const cookieParser = require('cookie-parser');
const path = require('path');
const PORT = process.env.port || 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/test', (req, res) => {
    const users = [
        {id:1, name: 'aaa'},
        {id:2, name: 'bbb'},
        {id:3, name: 'ccc'},
        {id:4, name: 'ddd'},
    ];
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});