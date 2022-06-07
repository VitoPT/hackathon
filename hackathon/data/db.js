import { MongoClient, ObjectId } from "mongodb" 

const URL = process.env.MONGO_URL ?? "mongodb://localhost:27017"

const DB_NAME = "db_bianca"
const COLLECTION_MUSIC = "db_music"
const COLLECTION_FAKE = "db_fake"
const COLLECTION_PRIZE = "db_prize"

let client;

export  async function connectToMongo() {
    try {
        if (!client) { client = await MongoClient.connect(URL)}
        return client
    } catch (errors) {
        console.log(errors)
    }
}

export  async function getMongoCollection(dbName, collectionName) {
    const client = await connectToMongo()
    return  await client.db(DB_NAME).collection(collectionName)
}

export  async function getRightAnswer(minute) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_MUSIC)
    console.log("minute % numero de musicas", minute % 21)
    return await collection.findOne({ order: minute % 21 })

}

export  async function getFakeAnswers() {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_FAKE)
    return await collection.find().toArray()

}
export  async function isAnswerBD(answer) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_MUSIC)
    return (await collection.find({ author: answer }).toArray()).length > 0

}

