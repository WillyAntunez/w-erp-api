import dotenv from 'dotenv';

import { Server } from './server/Server';
import { testDb } from './server/database';

dotenv.config();

const app = new Server(process);

app.start();
testDb();
