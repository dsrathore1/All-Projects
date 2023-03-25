import mongoose from 'mongoose';

const DB_SCHEMA = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            trim: true
        },
        lastName: {
            type: String
        },
        email: {
            type: String,
            require: true
        },
        mobNum: {
            type: Number,
            default: 9934955493,
            require: true
        }
    }
);

const DB_MODEL = new mongoose.model("crudCollection", DB_SCHEMA);

export default DB_MODEL;