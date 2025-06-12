import { MongoClient } from "mongodb";

export const client = new MongoClient(process.env.DB_URL)

export const main = async () => {
    try{
        await client.connect()
        console.log('Connected...');
        return client.db(process.env.DB_NAME);
    } catch(error){
        console.log(error);
        throw error;
    }
}