
const express = require("express");

const app = express();

const cors = require('cors');
app.use(cors());

//call the api from json file
const courses = require('./data/courses.json');

const singleCourse = require('./data/singleCourse.json');


const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('api is running');
});


app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/course/:id', (req, res) => {
    const id = req.params.id;

    const filteredCourse = singleCourse.find((course) => course.id === id);
    res.send(filteredCourse);
});

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});