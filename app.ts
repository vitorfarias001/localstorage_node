const express = require('express');
const app = express();
const routes = require('./src/routers/routes');

app.use('/api', routes);

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
