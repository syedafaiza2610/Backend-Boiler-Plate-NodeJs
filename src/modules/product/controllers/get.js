import { INTERNAL_SERVER_ERROR_MESSAGE } from "../../../constants/index.js";
import getData from "../services/get.js";

const getController = async (req, res) => {
    try {
        const users = await getData(req.query) // query param milta hai
        res.status(200).send({ status: 200, data: users });
    } catch (err) {
        console.log(err)
        res.status(500).send({ status: 500, message: INTERNAL_SERVER_ERROR_MESSAGE });
    }
}

export default getController;