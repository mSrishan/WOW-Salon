import mongoose from 'mongoose';

// Cache the connection for re-use.
let cached = global.mongoose || { conn: null, promise: null };

if (process.env.NODE_ENV === 'development') {
  // In development mode, we use a cached connection.
  global.mongoose = cached;
}

const connectToDatabase = async () => {
  if (cached.conn) {
    // If the connection is already established, return the cached connection.
    return cached.conn;
  }

  if (!cached.promise) {
    // If no promise exists, create one and connect to the database.
    const { MONGODB_URI } = process.env;

    if (!MONGODB_URI) {
      throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
    }

    cached.promise = mongoose.connect(MONGODB_URI).then((mongooseInstance) => {
      // After the connection is established, store it in the cache.
      cached.conn = mongooseInstance;
      return mongooseInstance;
    });
  }

  // Wait for the promise to resolve and return the connection.
  return cached.promise;
};

export { connectToDatabase };
