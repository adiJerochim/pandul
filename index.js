const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const { Comment } = require('./models');

const app = express();

mongoose.connect('mongodb://adi:abc123@ds157459.mlab.com:57459/pandul');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(require('morgan')('tiny'));

app.get('/', (req, res) => {
    return res.render('index');
});

app.get('/api/feed', (req, res) => {
    Comment.find({}, (err, docs) => {
        if (err) {
            return res.status(500).json({error: err.toString()});
        }
        return res.json(docs);
    });
});

app.post('/api/feed', (req, res) => {
    const post = req.body;
    const comment = new Comment();

    comment.email = post.email;
    comment.message = post.message;

    comment.save(err => {
        if (err) {
            return res.status(500).json({error: err.toString()});
        }
        return res.json(post);
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
