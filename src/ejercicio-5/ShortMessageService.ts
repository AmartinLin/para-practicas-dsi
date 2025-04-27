import { NotificationService } from "./EmailService";

export class ShortMessageService implements NotificationService {
  /**
   * Notities that the message it's been sent
   * @param message - string
   */
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}