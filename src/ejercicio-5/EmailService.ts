export interface NotificationService {
  notify(message: string): void;
}

export class EmailService implements NotificationService {
  /**
   * Puts a message in console about the message is sending
   * @param message - string
   */
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}