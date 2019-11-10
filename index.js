import express from 'express'
import routes from './src/routes/userRoutes'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express();
const PORT = 3001;

//body parser alternative
app.use(express.json());

routes(app);

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/userdb',{ useNewUrlParser: true,useUnifiedTopology: true })
//body parser setup

app.get('/',(req,res)=> {
    res.send('Node js  express server  is running on port 3000');

});

app.listen(PORT,()=>
console.log('node-js')
)