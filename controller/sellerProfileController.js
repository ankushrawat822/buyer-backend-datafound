 

const SellerProfile = require('../model/sellerProfile.js');

const getSellerProfileById = async (req, res) => {
    console.log("fetching seller id fun")
    const { sellerId } = req.params;

  

    try {
        const profile = await SellerProfile.findOne({ userId : sellerId }).populate("dataProducts");
        if (!profile) {
            return res.status(404).json({ message: 'Seller profile not found' });
        }
        res.json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getSellerProfileById };