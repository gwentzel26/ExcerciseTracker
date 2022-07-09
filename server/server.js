const express = require('express');
const db = require('./config/connection');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
const exercisesRouter = require('./routes/exercise-routes');
const usersRouter = require('./routes/user-routes');

app.use(cors());
app.use(express.json());

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

db.once('open', () => {
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });
});



