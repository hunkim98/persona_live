import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb+srv://hunkim98:hunkim98@cluster0.xzyh7.mongodb.net/firstDatabase?retryWrites=true&w=majority";

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is missing in .env.local");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
