import { object, string, ref } from 'joi';
import signupSchema from '../models/user.js';

const userSignupSchema = object({
    username: string().alphanum().min(3).max(30).required(),
    email: string().email().required(),
    password: string().pattern(new RegExp("^[a-zA-Z0-9@]{3,30}$")),
    
});
  app.post("/signup", (req, res, next) => {
    const { error, value } = userSignupSchema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
        return res.send("Invalid Request: " + JSON.stringify(error));
    } else {
        return res.send("Successfuly inside user: " + JSON.stringify(value));
    }
  });
  
  export default new userSignupSchema();