const Buyer = require("../model/auth-model.js")
// note : first check if the email is already exist if not only then save new user
exports.createUser = async (req , res) =>{
    const {email , userId , fullName } = req.body 
    console.log(email , userId , fullName)
    try{

        const user = await Buyer.findOne({email})

        if(user){
            return res.status(201).json({ msg : "user already exist" })

        }

        const newUser = new Buyer({email , userId , fullName})
        await newUser.save()

        res.status(200).json({
            msg : "user successfull save",
            user : email
        })

    }catch(err){
        console.log(err)
    }

}



exports.checkUser = async ( req , res) =>{
    const {email} = req.body

    try{

        const user = await Buyer.findOne({email})

        if(user){
            return res.status(200).json({ user : true })
        }

        return res.status(200).json({ user : false })

    }catch(err){
        console.log(err)
    }


}

