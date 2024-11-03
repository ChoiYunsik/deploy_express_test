import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const connection_url = process.env.CONNECT_URL;

const connect = async () => {

    if( process.env.NODE_ENV !== "production"){
        mongoose.set('debug', true);
    }

    mongoose
        .connect(connection_url, {
            dbName : "project", 
        })

        .then(()=>{
            console.log("Connected To MongoDB")
        })
        .catch((err)=>{
            console.err("Connected failed to MongoDB")
            console.log(err)
        })
       
}
export default connect;