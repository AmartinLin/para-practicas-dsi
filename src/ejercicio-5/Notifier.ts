import { NotificationService } from "./EmailService";

export class Notifier {
  constructor(private notificationService: NotificationService) {}

  /**
   * Acts like it's sending a message
   * @param message - string
   */
  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}