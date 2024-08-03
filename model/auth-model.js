const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    role: {
        type: String,
        default: "buyer"

    },

    fullName : {
        type : String,
        required : true

    },

    userId: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        required: false,
        default: Date.now

    }
})

module.exports = mongoose.model('Buyer', userSchema)












// const paymentSchema = new mongoose.Schema({
//     razorpay_order_id: {
//         type: String,
//         required: false
//     },
//     razorpay_payment_id: {
//         type: String,
//         required: false
//     },
//     razorpay_signature: {
//         type: String,
//         required: false
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     }
// });