const mongoose = require('mongoose')
const { Schema } = mongoose;

const applicationSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    address: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    phoneNo: {
        type: Number,
        require: true
    },
    companyName: {
        type: String,
        require: true
    },
    team: {
        type: String,
        require: true
    },
    product: {
        type: String,
        require: true
    },
    problem: {
        type: String,
        require: true
    },
    solution: {
        type: String,
        require: true
    },
    proposition: {
        type: String,
        require: true
    },
    competators: {
        type: String,
        require: true
    },
    revenue: {
        type: String,
        require: true
    },
    market: {
        type: String,
        require: true
    },
    plan: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    proposal: {
        type: String,
        require: true
    },
    status: {
        type: String,
    },
    userId: {
        type: String,
    },
    bookingStatus: {
        type: Boolean,
    },
    slotCode: {
        type: String,
    },
    section:{
        type:String,
    },
    slot_Number:{
        type:String,
    }
})
const applicationModel = mongoose.model("applications", applicationSchema)
module.exports = applicationModel;