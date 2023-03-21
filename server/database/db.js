
import mongoose from "mongoose";


const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@ecommerce-web.uaewb4d.mongodb.net/?retryWrites=true&w=majority`  // use backtick
    try {

        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, })     // connect function takes two elements 1.URL 2.Object
        console.log('Database connected Successfully');
    } catch (error) {
        console.log('Error while connecting database', error.message);
    }

}
export default Connection;