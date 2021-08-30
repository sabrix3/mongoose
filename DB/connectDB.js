const mongoose = require("mongoose")

const connectDB = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/person', {useNewUrlParser: true});
    } catch (error) {
        handleError(error)
    }
}

module.exports=connectDB