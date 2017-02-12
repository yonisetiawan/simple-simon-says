var express = require('express');
var app = express();

var cors = require('cors')//tambahan agar halaman bisa diakses dari client
app.use(cors())//tambahan agar halaman bisa diakses dari client
const index = require('./routes/index');
app.use('/api',index)


app.listen(3000)
