const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

// importing db 
const connectDB = require("./config/db.js")

connectDB()



// importing auth routes
const authRoute = require("./route/auth-route.js")
const checkUser = require("./route/auth-route.js")

// importing seller profile
const sellerProfile = require("./route/sellerProfile.js")
// data product
const dataProduct = require("./route/dataProduct.js")
const allDataProducts = require("./route/dataProduct.js")
const searchDataProduct = require("./route/dataProduct.js")
const  filterDataProductSearch  = require("./route/dataProduct.js")
// buyer's inquiry
const createInquiry = require("./route/buyerInquiry.js")
const getAllBuyerInquiryByBuyerFirebaseId = require("./route/buyerInquiry.js")
// request for data
const saveRequestData = require("./route/requestData.js")
const getAllRequestsByBuyerId = require('./route/requestData.js')
const getAllOffersByRequestId = require("./route/requestData.js")
const getOfferDetailsByOfferId = require("./route/requestData.js")
const updateOfferStatus = require("./route/requestData.js")
const closeBuyerDataRequest = require("./route/requestData.js")
// seller
const getSellerContactData = require("./route/seller.js")


// importing payment routes
const getPayment = require("./route/payment.js")
const verify = require("./route/payment.js")
const order = require("./route/payment.js")



app.use(cors())
app.use(express.json())

// auth roues 
app.use("/api" , authRoute)
app.use("/api" , checkUser)

// seller profile
app.use('/api' , sellerProfile)
// data product
app.use('/api' , dataProduct)
app.use("/api" , allDataProducts)
app.use("/api" , searchDataProduct)
app.use("/api" , filterDataProductSearch)
// buyer inquiry
app.use('/api' , createInquiry)
app.use('/api' , getAllBuyerInquiryByBuyerFirebaseId)
// request for data
app.use("/api" , saveRequestData)
app.use("/api", getAllRequestsByBuyerId)
app.use("/api" , getAllOffersByRequestId)
app.use("/api" , getOfferDetailsByOfferId)
app.use("/api" , updateOfferStatus)
app.use("/api" , closeBuyerDataRequest)
// seller
app.use("/api" , getSellerContactData)




// useless paymetn
// app.use("/api" , getPayment)
// app.use("/api" , verify)
// app.use("/api" , order)




module.exports = app



