'use strict';
const express = require('express');
// const morgan = require('morgan');
// const notFound = require('./middleware/errors/404.js');
// const errorHandler = require('./middleware/errors/500.js');
// const Auth = require('./routes/auth.js');
// const Data = require('./routes/api.js');
// const Admin = require('./routes/admin.routes.js');

const app = express();
app.use(express.json());
// app.use(morgan('dev'));
app.use(express.static('public'));

// app.use('/api/v1/auth',Auth);
// app.use('/api/v1/admin',Admin);
// app.use('/api/v1/data',Data);




// app.use('*',notFound);
// app.use(errorHandler);


module.exports = {
  server:app,
  start:(port)=>{
    app.listen(port,()=>console.log(`Hearing from port ${port}`));
  },
};
