import mongoose from 'mongoose';

const connection = {};
// mongoose.connect(
//     process.env.MONGO_URI,
//)
async function dbConnect() {
    if(connection.isConnected){
        return;
    }
    const db = await mongoose.connect(
        "mongodb+srv://mkrozee:12345@cluster0.1rwh1lz.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
    connection.isConnected = db.connections[0].readyState;
    
}
export default dbConnect;