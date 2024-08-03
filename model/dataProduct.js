const mongoose = require('mongoose');

const DataProductSchema = new mongoose.Schema({ 
    title: {
        type: String,
        // required: true
    },
    shortDescription: {
        type: String,
        // required: true
    },
    detailedDescription: {
        type: String,
        // required: true
    },
    dataCategory: {
        type: [Object], // Array of object
        // required: true
    },
    dataAttributes: {
        type: [String] // Array of strings
    },
    dataDelivery: {
        method: {
            type: [String], // Array of strings
            // required: true
        },
        format: {
            type: [String], // Array of strings
            // required: true
        },
        frequency: {
            type: [String], // Array of strings
            // required: true
        }
    },
    pricing: {  // TODO : correct pricing schema
        currency: {
            type: String,
            // required: true
        },
        pricingModel: {
            type: mongoose.Schema.Types.Mixed, // Can be any structure
            // required: true
        },
        revenueShare: {
            type: String
        }
    },
    sampleData: {
        type: [[mongoose.Schema.Types.Mixed]], // Array of arrays of mixed types
        // required: true
    },
    historicalCoverage: {
        type: String,
        // required: true
    },
    optimalCompanySize: {
        small: {
            type: Boolean,
            // required: true
        },
        medium: {
            type: Boolean,
            // required: true
        },
        enterprise: {
            type: Boolean,
            // required: true
        }
    },
    useCase: {
        type: [Object], // Array of object
        // required: true
    },
    volumeAndQuality: {
        volumeUnit: {
            type: String,
            // required: true
        },
        qualityUnit: {
            type: String,
            // required: true
        }
    },
    coverage: {
        type: mongoose.Schema.Types.Mixed, // Can be any structure
        // required: true
    },
    type: {
        type: String,
        // required: true
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller', 
        required: true
    },
    sellerFirebaseId : {
        type: String,
        required: true
    },
    sellerProfileMongoId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SellerProfile', 
        required: true
    }

}, { timestamps: true });

module.exports = mongoose.model('DataProduct', DataProductSchema);
