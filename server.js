const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + 'index.html');
});
app.get('/feed', function (req, res) {
    res.sendFile(__dirname + '/public/pages/feed.html');
});

app.get('/profile', function (req, res) {
    res.sendFile(__dirname + '/public/pages/profile.html');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));