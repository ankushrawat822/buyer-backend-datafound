// import express from 'express'
const express = require("express")

const { getDataProductById, getAllDataProduct, searchDataProduct, filterDataProductSearch } = require("../controller/dataProduct.js")

const router = express.Router()

router.get("/data-product/:productId" , getDataProductById  )

router.get("/all/data-product" , getAllDataProduct)

router.get('/search' , searchDataProduct)

router.post("/data-product/filter" , filterDataProductSearch )



module.exports = router