import mongoose from "mongoose";

const connectDB=async()=>{
    

mongoose.set('strictQuery', false); // or true, depending on your needs

// Then connect to your MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

}



export default connectDB
