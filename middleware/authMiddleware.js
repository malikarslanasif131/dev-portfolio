import JWT from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  console.log("Middleware1");
  try {
    const authorizationHeader = req.headers["authorization"];
    if (!authorizationHeader) {
      console.log("Middleware2: Authorization header missing");
      return res.status(401).send({
        message: "Auth Failed",
        success: false,
      });
    }
    const token = req.headers["authorization"].split(" ")[1];
    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        console.log("Middleware2");
        return res.status(200).send({
          message: "Auth Failed",
          success: false,
        });
      } else {
        req.body.userId = decode.id;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      message: "Auth Failed",
      success: false,
    });
  }
};
