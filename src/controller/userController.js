import mongoose from 'mongoose';
import {UserSchema} from '../models/userModel';

const User = mongoose.model('User',UserSchema);

export const addNewUser = (req,res) => {
        let newUser = new User(req.body);
        console.log(req.body);
        newUser.save((err,user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        })

    }