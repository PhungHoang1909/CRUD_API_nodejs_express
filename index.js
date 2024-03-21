import express from 'express';
import bodyParser from 'body-parser'; // take in incoming posts request body

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json()); // json: javascript object notation: send and request data to api
// get /users find all users

app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('Hello from Homepage.')); // create route

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT} `));
// nodemon will keep making change when we save the file
