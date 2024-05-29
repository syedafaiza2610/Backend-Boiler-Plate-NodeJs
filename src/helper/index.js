import jwt from "jsonwebtoken";
const authentication = (req, res, next) => {
    // console.log(req.headers)
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(403).send({ status: 403, message: "No Auth" })
    }
    const token = authorization.split(" ")[1];
    jwt.verify(token, "smit", (result) => {
        console.log("result", result)
        if (result) {
            next()

        } else {
            res.status(403).send({ status: 403 })
        }
    })
}

export { authentication }