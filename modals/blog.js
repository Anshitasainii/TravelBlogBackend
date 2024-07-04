import mongoose from "mongoose"


const blogSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    image:{
        type: String
    },
    likes:{
        type: Number
    },
    comment:{
        type: Number
    },
    share:{
        type: Number
    },
    created_on:{
        type: Date
    },
    created_by:{
        type: String
    },
    destination:{
        type: String
    },
    status:{
        type: Boolean
    },
    tags:{
        type: String
    },
    keyword:{
        type: String
    },
    youtube_link:{
        type: String
    },
    Canonical_url:{
        type: String
    },
    category:{
        type: Number
    },
    updated_on:{
        type: String
    },

}, {
    versionKey: false // You should be aware of the outcome after set to false
}
)


const blog = new mongoose.model('blogs', blogSchema)

export default blog