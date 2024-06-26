// import { MongoClient } from 'mongodb';
// import mongoose from 'mongoose';

// const uri = process.env.MONGODB_URI; 
// const client = new MongoClient(uri);

// let cachedDb = null;

// export async function connectToDatabase() {
//   if (cachedDb) {
//     return cachedDb;
//   }

//   if (!client.isConnected()) {
//     await client.connect();
//   }

//   const db = client.db('my-database'); // Replace 'my-database' with your database name
//   cachedDb = db;
//   return db;
// }


// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// export default mongoose.connection;