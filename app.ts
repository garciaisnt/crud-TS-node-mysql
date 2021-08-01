import dotenv from 'dotenv';
import Server from './models/server'

//conf dotenv
dotenv.config();

const server = new Server();
server.listen();