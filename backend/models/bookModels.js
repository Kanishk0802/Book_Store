import mongoose from "mongoose";

const BookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        publishYear: {
            type: String,
            required: true
        },
       
    },
    {
        timestamps: true 
    }
)

export const Book = new mongoose.model('Book', BookSchema);
