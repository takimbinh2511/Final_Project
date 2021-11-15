const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Ex:123@cluster0.o97dv.mongodb.net/Project?retryWrites=true&w=majority',{useNewUrlParser: true})
.then(console.log("Connect to Mongodb:)))"))
.catch (console.log)

module.exports = mongoose;