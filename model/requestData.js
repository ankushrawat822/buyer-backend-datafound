const mongoose = require('mongoose')


const optionSchema = new mongoose.Schema({
  value: String,
  label: String
});

const requestDataSchema = new mongoose.Schema({


  description: { type: String, default: '' },

  useCase: {
    type: String,
    default: ''
  },

  companyName: { type: String, default: '' },
  companyWebsite: { type: String, default: '' },
  companyLocation: optionSchema,
  companySize: optionSchema,
  jobLevel: optionSchema,
  termsAndConditions: { type: Boolean, default: null },

  deadline: { type: Date },

  status: { type: String, enum: ['open', 'closed'], default: 'open' },

  offers: [{
    sellerFirebaseId: { type: String, required: true },
    offerMessage: String,
    question: String,
    offerSent: { type: Boolean, default: false },
    status: { type: String, enum: ['pending', 'accepted', 'declined'], default: 'pending' },
    createdAt: { type: Date, default: Date.now }
  }],


  buyerFirebaseId: { type: String, required: true },


}, { timestamps: true })

module.exports = mongoose.model('RequestData', requestDataSchema)


