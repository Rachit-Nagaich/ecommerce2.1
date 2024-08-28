const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://rachitnagaich15:9826257485@cluster0.ugotujk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}