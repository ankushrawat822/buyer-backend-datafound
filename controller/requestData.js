const RequestData = require("../model/requestData")


const saveRequestData = async (req , res)=>{
     
    try {
        const response = new RequestData(req.body)
        await response.save()
      
        res.status(201).json(response);
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Something went wrong"})

    }
}


const getAllRequestsByBuyerId = async(req , res)=>{
    
     const { buyerFirebaseId} = req.query
    try {

        const response = await RequestData.find({buyerFirebaseId}).sort( { createdAt: -1 } )
        res.status(200).json(response)

        
    } catch (error) {
        res.status(500).json({message:"Something went wrong"})
        console.log(error)
    }
}

const getAllOffersByRequestId = async(req , res)=>{
    const {requestId} = req.params
     try {
        const response = await RequestData.find({_id : requestId}).sort( { "offers.createdAt": -1 } )
        res.status(200).json(response)

     } catch (error) {
        res.status(500).json({message:"Something went wrong"})
        console.log(error)
     }
}



const getOfferDetailsByOfferId = async(req , res)=>{

    try {
        const offerId = req.params.offerId;

        const result = await RequestData.findOne(
          { 'offers._id': offerId },
          { 'offers.$': 1 }
        );
    
        if (!result) {
          return res.status(404).json({ message: 'Offer not found' });
        }
    
        const offer = result.offers[0];
        res.json(offer);
    } catch (error) {
        console.error('Error searching for offer:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

//  update status of offers ( accept or decline )
const updateOfferStatus = async(req , res)=>{
    try {
        const { offerId } = req.params;
        const { action } = req.body;
    
        let newStatus;
        if (action === 'interested') {
          newStatus = 'accepted';
        } else if (action === 'decline') {
          newStatus = 'declined';
        } else {
          return res.status(400).json({ message: 'Invalid action. Use "interested" or "decline".' });
        }

        console.log(offerId , newStatus)
    
        const result = await RequestData.findOneAndUpdate(
          { 'offers._id': offerId },
          { $set: { 'offers.$.status': newStatus } },
          { new: true }
        );
    
        if (!result) {
          return res.status(404).json({ message: 'Offer not found' });
        }
    
        const updatedOffer = result.offers[0];
        res.json({ message: 'Offer status updated successfully', offer: updatedOffer });
    } catch (error) {
        console.error('Error updating offer status:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


// close request 
const closeBuyerDataRequest = async ( req , res )=>{
   const {requestId} = req.params
   try {
        const result = await RequestData.findOneAndUpdate(
          { _id: requestId },
          { $set: { status: 'closed' } },
          { new: true }
        );
        if (!result) {
          return res.status(404).json({ message: 'Request not found' });
        }
    
        res.json({ message: 'Request closed successfully' });

   } catch (error) {
    console.error('Error closing request :', error);
        res.status(500).json({ message: 'Internal server error' });
   }
}

module.exports = { saveRequestData , getAllRequestsByBuyerId , getAllOffersByRequestId ,getOfferDetailsByOfferId , updateOfferStatus , closeBuyerDataRequest }