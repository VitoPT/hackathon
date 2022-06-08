import {getAnswers} from "../../services/prizeService"
export default async function getAnswersfromService (req, res) { 
    if (req.method === "GET") {
        console.log("API", req.headers.auth)
        let a = await getAnswers(req.query.minute, req.headers.auth); 
        return res.status(200).json({a})
    }

}

