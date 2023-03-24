import mongoose from 'mongoose';

const DB_SCHEMA = mongoose.Schema(
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
            require: true
        }
    }
);

const DB_MODEL = mongoose.model("crudCollection", DB_SCHEMA);

export default DB_MODEL;