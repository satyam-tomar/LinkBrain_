import ContactModel from "../models/contact_model.js";

export const saveDetails = async(req, res) => {
    const {name, email, mobile, description} = req.body;
    try {
        const cleintDetails  = {
             name, email, mobile, description
        }

        await ContactModel.create(cleintDetails);

        res.status(201).json({
            message: "Query saved successfully",
            success: true
        });

    } catch (error) {
    
        console.log('Internal server error', error);
          res.status(201).json({
            message: "Query saved successfully",
            success: false
        });
    }
}