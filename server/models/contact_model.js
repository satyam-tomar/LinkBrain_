import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const ContactModel = mongoose.model('contactUs', contactSchema);

export default ContactModel;