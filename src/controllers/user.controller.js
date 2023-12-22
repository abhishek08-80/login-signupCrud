const Services = require('../services/index')


async function signupUser(req, res, next) {
    console.log("I am here");
    try {
        let result = await Services.userServices.signupUser(req.body)
    } catch (error) {
        return res.json({
            message: error
        })
    }
}

module.exports = {  
    signupUser
}