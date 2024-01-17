const express = require('express');
const connectToMongo = require('./db');

// Define an asynchronous function to connect to MongoDB
const startServer = async () => {
  try {
    await connectToMongo();

    const app = express();
    const port = 5001;

    app.use(express.json());

    // Available routes
    app.use('/api/auth', require('./routes/auth'));
    // app.use('/api/time', require('./routes/time'));
    app.use('/api/appointment', require('./routes/appointment'));

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

// Call the asynchronous function to start the server
startServer();
