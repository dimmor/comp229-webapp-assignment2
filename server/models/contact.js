let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    name: String,
    title: String,
    department: String,
    phone: String,
    email: String
},
{
    collection: "bcontacts"
});

module.exports = mongoose.model('Contact', contactModel);