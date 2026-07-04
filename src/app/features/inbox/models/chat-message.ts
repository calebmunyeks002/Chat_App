export interface ChatMessage {

  id: number;

  senderId: number;

  receiverId: number;

  senderName: string;

  message: string;

  time: string;

  mine: boolean;

  status: 'Sent' | 'Delivered' | 'Read';

  reaction?: string;

  image?: string;

}