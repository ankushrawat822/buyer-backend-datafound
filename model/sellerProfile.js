const mongoose = require('mongoose');

const SellerProfileSchema = new mongoose.Schema({
   userId: {
        type: String,
        required: true,
        unique: true
    },
    companyName: String,
    companyTagLine: String,
    companyDescription: String,
    companyWebsite: String,
    useCase: String,
    pricing: String,
    keyDifference: String,
    logo: String,
    revenue: String,
    companySize: String,
    dataProducts : [ { type: mongoose.Schema.Types.ObjectId, ref: 'DataProduct' } ]
   
} , {timestamps: true});

module.exports = mongoose.model('SellerProfile', SellerProfileSchema);

