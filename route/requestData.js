
// import express from 'express'
const express = require("express")
const { saveRequestData , getAllRequestsByBuyerId, getAllOffersByRequestId, getOfferDetailsByOfferId, updateOfferStatus, closeBuyerDataRequest } = require("../controller/requestData")


const router = express.Router()

router.post("/create-request" , saveRequestData  )

router.get("/buyer/all-requests" ,  getAllRequestsByBuyerId )

router.get("/buyer/:requestId/offer" , getAllOffersByRequestId )

router.get("/buyer/offers/:offerId" , getOfferDetailsByOfferId)

router.patch("/buyer/offers/:offerId/status" , updateOfferStatus)

router.patch("/buyer/close-request/:requestId" , closeBuyerDataRequest)


module.exports = router