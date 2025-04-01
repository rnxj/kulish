import { MongoClient } from 'mongodb';

//keeping it here to resolve deploy errors:
const uri: string = 'mongodb+srv://mockticjj:IUxUbt33TRdvovIj@kulishschool.vjr5xhq.mongodb.net/kulish_school?retryWrites=true&w=majority' ;

if (!uri) {
  throw new Error('Please add your MongoDB URI to .env');
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

client = new MongoClient(uri);
clientPromise = client.connect();

export default clientPromise;
