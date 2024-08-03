const mongoose = require('mongoose')

const optionSchema = new mongoose.Schema({
    value: String,
    label: String
  });

const buyerInquirySchema = new mongoose.Schema({
     
    countryCoverage: [optionSchema],
    detailedRequirements: { type: String, default: '' },
    budgetRange: { type: String, default: '' },
    useCase: [optionSchema],
    category: [optionSchema],
    companyName: { type: String, default: '' },
    companyWebsite: { type: String, default: '' },
    companyLocation: optionSchema,
    companySize: optionSchema,
    jobLevel: optionSchema,
    termsAndConditions: { type: Boolean, default: null },

    status: { type: String, enum: ['pending', 'accepted', 'declined'], default: 'pending' },
    read: { type: Boolean, default: false },
    buyerFirebaseId: { type: String, required: true },
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Seller', required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'DataProduct', required: true },

} , { timestamps: true })

module.exports = mongoose.model('BuyerInquire', buyerInquirySchema)


