// include our packages in our main server file
'use-strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

app.listen(port);
console.log('Your server is running on port ' + port);