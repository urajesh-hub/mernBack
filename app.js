import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './db/dbconfig.js';
import Post from './model/postModel.js';
import postRoutes from './routes/postRoutes.js'


// Load environment variables from .env file
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000; // Use PORT from environment or default to 5000
const app = express();


// Middleware
app.use(cors()); // Use PORT CROS ORGIN ERROR WAITED SERVER AND CLIENT
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // // FORM DATA PARSE 
app.use('/api',postRoutes) // Manage Routes



// Basic route
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>'); // Fixed HTML tag
});




// Start the server
app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
});
