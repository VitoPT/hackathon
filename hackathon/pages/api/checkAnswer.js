import {isAnswerService} from "../../services/prizeService"

export default async function checkAnswer (req, res) { 
    if (req.method === "GET") {
        console.log("API ANSWER", req.query.answer)
        let a = await isAnswerService(req.query.answer); 
        return res.status(200).json({a})
    }
}
   
