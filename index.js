require("dotenv").config();
const express = require('express')
const mongoose = require('mongoose');
const User = require('./models/user.model.js');
const UserRoute = require("./routes/routes.js");
//const LeagueRoute = require("./routes/league.route.js");

const app = express()

const dbURI = process.env.MONGODB_URI

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.send('hello from node API srever :)')
});

// routes
app.use("/api", UserRoute);
//app.use("/api/league", LeagueRoute);


mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Connected to database!");
    app.listen(4000, () => {
      console.log("Server is running on port 4000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });


 
















// // import mongoose from 'mongoose';


// // if (!process.env.MONGODB_URI) {
// //     throw new Error("Please provide a valid connection string");
// //   }
// //   const connectDB = async () => {
// //     if (mongoose.connection?.readyState >= 1) {
// //       // console.log("---- Already connected to MongoDB ----");
// //       return;
// //     }
  
// //     try {
// //       console.log("---- Connecting to MongoDB ----");
// //       await mongoose.connect(process.env.MONGODB_URI as string);
// //     } catch (error) {
// //       console.error("Error connecting to MongoDB", error);
// //     }
// //   };

// // export default connectDB;
// import { MongoClient } from 'mongodb';

// // Interface for the MongoDB connection URI (for enhanced type safety)
// interface MongoDbUri {
//   uri: string;
// }

// // Function to validate the MongoDB URI (optional, but recommended for production)
// function validateMongoDbUri(uri: string): MongoDbUri {
//   if (!uri.startsWith('mongodb://') && !uri.startsWith('mongodb+srv://')) {
//     throw new Error('Invalid MongoDB connection URI format.');
//   }

//   return { uri };
// }

// let client: MongoClient | undefined;
// let clientPromise: Promise<MongoClient> | undefined;

// // Function to handle MongoDB connection (using async/await for clarity)
// async function connectToMongoDb(uri: string): Promise<MongoClient | undefined> {
//   if (!process.env.MONGODB_URI) {
//     throw new Error('Please add your Mongo URI to .env.local');
//   }

//   // Validate URI in production environments (optional)
//   if (process.env.NODE_ENV === 'production') {
//     validateMongoDbUri(process.env.MONGODB_URI);
//   }

//   if (!clientPromise) {
//     const connUri = process.env.MONGODB_URI; // Use validated URI if available
//     client = new MongoClient(connUri);
//     clientPromise = client.connect();
//   }

//   await clientPromise;
//   return client;
// }

// // **new in Next.js 14:**
// export default connectToMongoDb;
