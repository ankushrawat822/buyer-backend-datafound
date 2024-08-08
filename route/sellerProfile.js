
// import express from 'express'
const express = require("express")
const { getSellerProfileById } = require("../controller/sellerProfileController.js")

const router = express.Router()

router.get("/seller/profile/:sellerId" , getSellerProfileById  )


module.exports = router