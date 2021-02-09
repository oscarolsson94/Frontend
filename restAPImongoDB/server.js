import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 3000;

mongoose.connect('mongodb+srv://test:test123@cluster0.gfsfw.mongodb.net/oscarDB?retryWrites=true&w=majority', { useNewUrlParser: true , useUnifiedTopology: true });
const db = mongoose.connection;

app.listen(PORT, () => console.log(`server started on port: ${PORT}`));

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))