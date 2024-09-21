import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://Niffyjade:niffyjay28@blog-app.3yl25.mongodb.net/blog-app')
    console.log("DB Connected");
}