import mongoose from "mongoose";
export const connectDB = async()=>{
    try {
        await mongoose.connect('mongodb+srv://EberthCode:ERB123098456*@cluster0.vwa8g.mongodb.net/Inteligencia_Artificial?retryWrites=true&w=majority&appName=Cluster0')
        console.log('DB is connected');
    } catch (error) {
        console.log(error);
    }
}