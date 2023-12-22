import dotenv from 'dotenv'
import express from'express'
import  mongoose from 'mongoose'
import routes from './src/routes/user.route.js'
dotenv.config()
const app = express();
const port = 3333;
// app.use(express.urlencoded({extended:true}))
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/loginSignup',).then((value)=>{
    console.log(`successfully connected to http://localhost:${port}`)
}).catch((e)=>{
    console.log(e,"not connected to db")
});

routes(app)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

