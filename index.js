const Joi = require('joi');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());

const courses = [
    {id: 1, name: 'course 1'},
    {id: 2, name: 'course 2'},
    {id: 3, name: 'course 3'},
];

app.get('/', (req, res) => {
    res.send('hello world!!!');
});

app.post('/api/courses', (req, res ) => {
    console.log('Starting POST request');
    try {
        const schema = {
            name: Joi.string().min(3).required()
        };
        console.log('Start Schema');
        const { error, result } = Joi.object(schema).validate(req.body);
        if (error) {
            console.log('validation error', error);
            return res.status(400).send(error.details[0].message);
        }
        console.log(result);
    //});

        const course = {
            id: courses.length + 1,
            name: req.body.name
        };

        courses.push(course);
        res.send(course);
    } catch(error) {
        console.log(error);

    }
});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});