const { User } = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signIn = async (req, res) => {
  const { email, password } = req.body;
  /**
   *các bước xác thực đăng nhập đúng không:
   *   1. tìm user theo các email
   *   2. kiểm tra password
   */
  try {
    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      //kiểm tra password
      const isAuth = bcryptjs.compareSync(password, userLogin.password);

      if (isAuth) {
        // const token = jwt.sign(payLoad,secretKey,{expiresIn : 365*24*60*60,/*giây*/});
        //tạo token
        const accessTokenLife = "10h";

        // const secretKey = "tkb@2511";
        const accessTokenSecret = "ACCESS_TOKEN_SECRET";

        const dataForAccessToken = {
          id: userLogin.id,
          email: userLogin.email,
          role: userLogin.role,
        };

        const accessToken = await jwt.sign(
          dataForAccessToken,
          accessTokenSecret,
          {
            algorithm: "HS256",
            expiresIn: accessTokenLife,
          }
        );

        if (!accessToken) {
          return res.status(401).send("Login Failed!");
        }

        res.status(200).json({
          message: "Đăng nhập thành công",
          token: accessToken,
        });
      } else {
        res.status(400).send({
          message: "Mật khẩu không chính xác",
        });
      }
    } else {
      res.status(404).send({
        message: "Not Found Email",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  signIn,
};
