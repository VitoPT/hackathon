import {getAnswers} from "../../services/prizeService"
export default async function getAnswersfromService (req, res) { 
    if (req.method === "GET") {
        console.log("API", req.query.minute)
        let a = await getAnswers(req.query.minute); 
        return res.status(200).json({a})
    }

}

