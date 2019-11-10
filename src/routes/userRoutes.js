import { addNewUser } from "../controller/userController";

const routes = (app) => {
    app.route('/user')
    .get((req,res,next)=> {
        //middleware
        console.log(`request from : ${req.originalUrl}`)
        console.log(`request from : ${req.method}`)
        next();
    },(req,res,next) => {
        res.send('get request succesfull!!!');
    })
    
    .post(addNewUser);


    app.route('/user/:userId')
     .put((req,res)=>
        res.send('put request succesfull!!!'))
     
     .delete((req,res)=>
        res.send('delete request succesfull!!!'))
}

export default routes;