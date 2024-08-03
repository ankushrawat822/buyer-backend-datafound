const mongoose = require('mongoose')

const sellerSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    userId : {
        type : String,
        required : true,
        unique : true
    },
    createdAt : {
        type : Date ,
        required : false,
        default : Date.now

    }
    
})

module.exports = mongoose.model('Seller', sellerSchema)