import mongoose from 'mongoose';

const doctorSchema =  mongoose.Schema({
    fullName: String,
    age: Number,
    email: String,
    phoneNumber: String,
    slmcNo: Number,
    speciality: String,
    gender: String,
    qualification:String,
    selectedFile: String,
    birthday: { type: Object },
    createdAt:{
        type:Date,
        default:new Date()
    },
})

const doctorManagement = mongoose.model('doctorManagement',doctorSchema);

export default doctorManagement;