import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

import { Rate } from './entities/rate.entity';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class RatesGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('newRate')
  async handleNewRate(@MessageBody() rate: Rate): Promise<void> {
    this.server.emit('newRate', rate);
  }
}
