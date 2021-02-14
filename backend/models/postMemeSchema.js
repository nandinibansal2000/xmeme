import mongoose from 'mongoose';

const schema = mongoose.Schema({
    owner: String,
    caption: String,
    imgFile : String,
    dateTime : {
        type: Date,
        default: new Date()
    },
});

var postMemeMessage = mongoose.model('Meme', schema);


export default postMemeMessage;