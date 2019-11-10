import { addNewUser,getUsers, getUserById, updateUser, deleteUser } from "../controller/userController";

const routes = (app) => {
    app.route('/user')
    .get((req,res,next)=> {
        //middleware
        console.log(`request from : ${req.originalUrl}`)
        console.log(`request from : ${req.method}`)
        next();
    },getUsers)
    
    .post(addNewUser);
    

    //get specific user
  
    app.route('/user/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)
}

export default routes;