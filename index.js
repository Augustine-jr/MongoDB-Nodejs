import { MongoClient } from "mongodb"
import dotenv from "dotenv"
dotenv.config()
const uri = process.env.MONGO_URI

const client = new MongoClient(uri)
const usersCollection = client.db("sample_mflix").collection("users")


const connectToDatabase = async() =>{
  try {
    await client.connect()
    console.log("Connected to MongoDB")
  } catch (error) {
    console.error(`Error connecting to database: ${error}`)


  }
}

const user = {
  name:"Micheal",
    email:"anekmicheal@gmail.com",
    password:"1234567890"
}

const main = async()=>{
  try {
   await connectToDatabase()
   let result = await usersCollection.insertOne(user)

  } catch (error) {
     console.error(`Error connecting to database: ${error}`)
  }
  finally {
    await client.close()
  }
}

main()