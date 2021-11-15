const {User} = require("../models/user.model");
 const bcryptjs = require("bcryptjs");
 const jwt = require("jsonwebtoken");
 
 const signIn = async(req, res) =>{
    const {email,password} = req.body;
    /** 
    *các bước xác thực đăng nhập đúng không:
    *   1. tìm user theo các email
    *   2. kiểm tra password
    */
   try {
        const userLogin = await User.findOne({
            where : {
                email : email,

            },
        });
        if (userLogin)
        {
            //kiểm tra password
            const isAuth = bcryptjs.compareSync(password,userLogin.password);
            if(isAuth)
            {
                //tạo token
                const payLoad = {
                    id : userLogin.id,
                    email : userLogin.email,
                    role : userLogin.role
                };
                const secretKey = "tkb@2511";
                const token = jwt.sign(payLoad,secretKey,{expiresIn : 365*24*60*60,/*giây*/});
                res.status(200).send({
                    message : "Đăng nhập thành công",
                    token,
                });
            }else
            {
                res.status(400).send({
                    message : "Mật khẩu không chính xác",
                });
            }
        }
        else
        {
            res.status(404).send({
                message : "Not Found Email",
            });
        }
   }catch (error)
   {
        res.status(500).send(error);
   }
};


module.exports = {
    signIn,
};