import mongoose from 'mongoose';

const Schema  = mongoose.Schema;

export const UserSchema = new Schema({
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    email : {
        type : String
    },
    company : {
        type : String
    },
    company : {
        type : Number
    },
    created_date : {
      type : Date,
      default : Date.now
    }
});


