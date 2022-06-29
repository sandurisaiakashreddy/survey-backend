const db = require("../models");
const User = db.surverymanager;
module.exports = {
    async register(req, res) {
       try{
        const user =  await User.create(req.body)
        const output  = user.toJSON();
        res.send({
            user: output
        })
       }
       catch(err){
           res.status(400).send({
               error: 'A Survey Manager Already Exists...'
           })
           return
       }
    },
    async login(req, res) {
        try{
            const {email, password} = req.body
            const user =  await User.findOne({
                where:{
                    email:email
                }
            })
            if(!user){
                res.status(403).send({
                    error: 'A Survey Manager doesnot exist with above details...'
                })
                return
            }
            const pass = password === user.password
            console.log(pass)
            if (!pass)
            {
                res.status(403).send({
                    error: 'Information Provided is incorrect...'
                })
                return
            }
            const output = user.toJSON()
            res.send({
               user: output
           })
        }
           catch(err){
            console.log(err)
               res.status(500).send({
                   
                   error: 'Something went wrong'
               })
               return
           }
    }
}
