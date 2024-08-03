const express = require("express")
const { createInquiryForProduct, getAllBuyerInquiryByBuyerFirebaseId } = require("../controller/buyerInquiry")

const router = express.Router()

router.post('/create-inquiry' , createInquiryForProduct)

router.get('/all/inquiries' , getAllBuyerInquiryByBuyerFirebaseId )


module.exports = router