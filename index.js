//For basic CRUD application we need following modules
global.bodyParser = require('body-parser');
global.mysql = require('mysql');
const port = 5000;

global.db = require('./include/connection');
const router = require('./include/routes');

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});