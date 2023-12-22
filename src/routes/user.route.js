import  userService  from "../services/user.service.js";
import auth from "../middleware/auth.js"
const  userRoutes = (app) => {
    app.post("/user/sign-up",(req,res)=> userService.create(req,res))
    app.get("/user/sign-in",(req,res)=>userService.findByEmail(req,res))
    // app.get("/sign-in",(req,res)=>userService.findByEmail(req,res))
}
export default userRoutes