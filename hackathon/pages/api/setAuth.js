import { } from "../../services/setAuthService"

export default async function setAuthApi(req, res) {
    if (req.method === "POST") {
        console.log("API ANSWER", req.query.auth)
        await getAuthService(req.query.auth);
    }
}

