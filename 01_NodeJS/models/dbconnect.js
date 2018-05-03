
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MongoSchema = new Schema({
    name:{
        type:String,
        required:[true,'Name is required']
    },
    rank:{
        type:String
    },
    available:{
        type: Boolean,
        default:false
    }

});

const Mongo =mongoose.model('mongo',MongoSchema);
module.exports=Mongo;