// /lib/socket.ts
import { io, Socket } from 'socket.io-client';

const socket: Socket = io('http://localhost:3001'); // Will connect to backend server

export default socket;
