import { MongoClient } from 'mongodb';

const uri: string = process.env.MONGODB_URI || ''; // Ensure the URI is properly defined

if (!uri) {
  throw new Error('Please add your MongoDB URI to .env');
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

client = new MongoClient(uri);
clientPromise = client.connect();

export default clientPromise;
