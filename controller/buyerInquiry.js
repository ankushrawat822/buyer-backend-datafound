const BuyerInquire = require("../model/buyerInquiry.js")

// add an inquiry
const createInquiryForProduct = async (req, res) => {
    console.log('create an inquiry');
    try {
        const inquiry = new BuyerInquire(req.body);
        await inquiry.save();
        res.status(201).json(inquiry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


// used by seller
const getSingleBuyerInquiryByBuyerInquiryIdAndSellerId = async (req, res) => {

    const { buyerInquiryId, sellerId } = req.params;

    try {
        const product = await BuyerInquire.findOne({ _id: buyerInquiryId }).populate('');
        if (!product) {
            return res.status(404).json({ message: 'Buyer Inquiry not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}


// used by only for buyer
const getAllBuyerInquiryByBuyerFirebaseId = async (req, res) => {

    const buyerFirebaseId  = req.query.buyerFirebaseId;
    console.log('buyerFirebaseId', buyerFirebaseId)
    try {
        const inquires = await BuyerInquire.find({ buyerFirebaseId: buyerFirebaseId }).populate('productId').sort({ createdAt: -1 })
        if (!inquires) {
            return res.status(404).json({ message: 'Buyer Inquiry not found' });

        }
        res.json(inquires);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }


}


module.exports = {
    createInquiryForProduct, getAllBuyerInquiryByBuyerFirebaseId
}