
const { use } = require('../app.js');
const DataProduct = require('../model/dataProduct.js');

const getDataProductById = async (req, res) => {
    const { productId } = req.params;

    try {
        const product = await DataProduct.findOne({ _id :  productId }).populate('sellerProfileMongoId');
        if (!product) {
            return res.status(404).json({ message: 'Data product not found' });
        }
        res.json(product);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getAllDataProduct = async (req, res) => {

    try {
        const product = await DataProduct.find().populate('sellerProfileMongoId');
        if (!product) {
            return res.status(404).json({ message: 'Data products not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const searchDataProduct = async (req, res) => {
    const { t } = req.query;
    
     try {

        let pipeline = [];

        if (t && t.trim() !== '') {
            // If a search query is provided, use the $search stage
            pipeline.push({
                $search: {
                    index: "search-product",
                    text: {
                        query: t,
                        path: {
                            wildcard: "*"
                        }
                    }
                }
            });
        }

        pipeline.push(
            {
                $lookup: {
                    from: 'sellerprofiles',
                    localField: 'sellerProfileMongoId',
                    foreignField: '_id',
                    as: 'sellerProfile'
                }
            },
            {
                $unwind: {
                    path: '$sellerProfile',
                    preserveNullAndEmptyArrays: true
                }
            }
        );


        if (!t || t.trim() === '') {
            pipeline.push({ $limit: 20 }); // Adjust the limit as needed
        }

        const response = await DataProduct.aggregate(pipeline);

        if (response.length === 0) {
            return res.status(404).json({ message: 'No products found' });
        }

           res.status(200).json(response)
     } catch (error) {
         console.log(error);
         res.status(500).json({ message: error.message });
     }
}




// filter product search
const filterDataProductSearch = async(req , res)=>{
    try {

        const { useCases, categories } = req.body;
        console.log(useCases , categories)

        // Build the filter query
        const filter = {};
    
        if (useCases && useCases.length > 0) {
            filter['useCase'] = { 
                $elemMatch: { 
                    value: { $in: useCases }
                }
            };
        }

        if (categories && categories.length > 0) {
            filter['dataCategory'] = { 
                $elemMatch: { 
                    value: { $in: categories }
                }
            };
        }

        console.log("Filter query:", JSON.stringify(filter, null, 2));

        // Execute the query
        if (Object.keys(filter).length === 0) {
            return res.status(200).json({ message: 'No filter criteria provided', data: [] });
        }

        const filteredProducts = await DataProduct.find(filter).populate('sellerProfileMongoId');
        console.log("Number of filtered products:", filteredProducts.length);

        if (filteredProducts.length === 0) {
            return res.status(200).json({ message: 'No products found matching the criteria', data: [] });
        }

        res.json(filteredProducts);
    
       
        
    } catch (error) {
        console.error('Error filtering products:', error);
        res.status(500).json({ message: 'Error filtering products' });
    }
}


module.exports = { getDataProductById , getAllDataProduct , searchDataProduct , filterDataProductSearch };