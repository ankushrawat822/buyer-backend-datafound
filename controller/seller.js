const Seller = require("../model/seller")


const getSellerContactData = async (req ,res)=>{
    const userId = req.params.userId
    console.log(userId)
    try {
        const response = await Seller.findOne( {userId} )
        if(!response){
            res.status(404).json({
                message: "No seller found"

            })



        }else{
            res.status(200).json({
                response
            })

        }

    } catch (error) {
        res.status(500).json({message : error.message})

    }
}


module.exports = {
    getSellerContactData
}


