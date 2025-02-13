import express from 'express';
import { config } from "dotenv";
import cors from 'cors';
import connectDB from './src/config/db.js';
import errorMiddleware from './src/middleware/errorMiddleware.js';
import cookieParser from 'cookie-parser';

// Routes Import
import bookRoutes from "./src/routes/bookRoutes.js";
import userRoutes from './src/routes/userRoutes.js';
import reviewRoutes from './src/routes/reviewRoutes.js';
import authRoutes from './src/routes/authRoutes.js';
import adminRoutes from './src/routes/authRoutes.js';

config()
connectDB()
const app = express();

//Middleware
app.use(express.json())
app.use(cookieParser())

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true, 
    })
);


const PORT = process.env.PORT || 8001;

app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/auth", authRoutes)
app.use("/api/admin", adminRoutes)


//Error handling middleware
app.use(errorMiddleware);

let server = app.listen(PORT, () => {
    console.log(`Server running in port http://localhost:${PORT}`)
});

process.on("SIGTERM", () => {
    console.log("Shutting down server...");
    if (server) {
        server.close(() => {
            console.log("Server closed.");
            process.exit(0);
        });
    }
});