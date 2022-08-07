import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js';
import commentRoutes from './routes/comments.js';
import videoRoutes from './routes/videos.js';
import authRoutes from './routes/auth.js';

const app = express();
dotenv.config();

const connect = () => {
	mongoose
		.connect(process.env.MONGO)
		.then(() => {
			console.log('Connected to MongoDB');
		})
		.catch((err) => {
			throw err;
		});
};

app.use(express.json());
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/comments', commentRoutes);

app.listen(7000, () => {
	connect();
	console.log('Server running at http://localhost:7000');
});
