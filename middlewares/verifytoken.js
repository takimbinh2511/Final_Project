const jwt = require("jsonwebtoken");

//kiểm tra user có đăng nhập hay chưa
const authenticate = (req, res, next) =>{
    const token = req.header("token");
    try{
        const secretKey = "ACCESS_TOKEN_SECRET";
        const decode = jwt.verify(token,secretKey);
        req.user = decode; //xét thêm key mới cho decode
        next();
    }catch(error){
        res.status(401).send({
            message : "Token không hợp lệ",
        })
    }
};

//phân quyền đăng nhập 
const authorize = (arrayRole) => (req, res, next) =>{
    try{
        const {user} = req;
        if(arrayRole.includes(user.role))
        {
            next();
        }
        else{
            res.status(403).send("Bạn không có quyền truy cập");
        }
        
    }catch(error){
        res.status(500).send(error);
    }
};

module.exports = {
    authenticate, authorize,
}