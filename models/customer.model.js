const mongoose = require('../models/connectdb');

const CustomerSchema = new mongoose.Schema ({
   
    fullName: {type: String, required: true},
    cmnd: {type: String, required: true},
    numberPhone: {type: String, required: true},
    numberRoom: {type: String, required: true},
    debit: {type: Number, required: true},
    currency: {type: String, required: true}
    },
    {collection: "Customer"}
)

const Customer = mongoose.model('Customer',CustomerSchema);
module.exports = {
    CustomerSchema, Customer,
}