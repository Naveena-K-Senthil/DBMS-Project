const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/PurchaseDetailsDB', {useNewUrlParser: true }, (err) => {
    if(!err) {console.log('MongoDB conn. success')}
    else {console.log('error:'+ err)}
});

require('./employee.model');