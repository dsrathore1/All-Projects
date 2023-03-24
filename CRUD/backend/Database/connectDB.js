import mongoose from 'mongoose';

const DB_CONNECT = async () => {
    try {
        const conn = await new mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`Your DB is connected at ${conn.connection.host}`);
    }
    catch (error) {
        console.log(error)
    }
}

export default DB_CONNECT;