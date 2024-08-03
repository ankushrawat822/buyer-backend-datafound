// import express from 'express'
const express = require("express")
const { getSellerContactData } = require("../controller/seller.js")

const router = express.Router()

router.get("/seller/contact/:userId" , getSellerContactData  )


module.exports = router