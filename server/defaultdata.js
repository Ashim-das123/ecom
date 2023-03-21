import { products } from "./constants/data.js"
import Product from "./model/product-scema.js";

const DefaultData = async () => {      // This is for insert data into database.database is a external entity so we need to take care of exceptio handling

    try {
        // await Product.deleteMany({});   // Ata na dile data jotobar run korbo data insert hbe.this is not a good solution.
        await Product.insertMany(products);

        console.log('Data inserted Successfully');
    }
    catch (error) {
        console.log("Error while inserting Defaultdata into DataBase", error.message);
    }
}
export default DefaultData;