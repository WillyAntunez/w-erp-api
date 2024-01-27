import { Server } from './server/server';
import dotenv from 'dotenv';

dotenv.config();

const app = new Server();
app.start();
