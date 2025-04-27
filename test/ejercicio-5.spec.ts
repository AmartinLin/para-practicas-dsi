import { describe, test, expect, vi } from 'vitest';
import { EmailService } from '../src/ejercicio-5/EmailService';
import { ShortMessageService } from '../src/ejercicio-5/ShortMessageService';
import { Notifier } from '../src/ejercicio-5/Notifier';

describe('EmailService', () => {
  test('should send email notification', () => {
    const emailService = new EmailService();
    const consoleSpy = vi.spyOn(console, 'log');
    emailService.notify('Hello World!');
    expect(consoleSpy).toHaveBeenCalledWith('Sending notification by email: Hello World!');
    consoleSpy.mockRestore();
  });
});

describe('ShortMessageService', () => {
  test('should send SMS notification', () => {
    const smsService = new ShortMessageService();
    const consoleSpy = vi.spyOn(console, 'log');
    smsService.notify('Hello World!');
    expect(consoleSpy).toHaveBeenCalledWith('Sending notification by SMS: Hello World!');
    consoleSpy.mockRestore();
  });
});

describe('Notifier', () => {
  test('should send notification using EmailService', () => {
    const emailService = new EmailService();
    const notifier = new Notifier(emailService);
    const consoleSpy = vi.spyOn(console, 'log');
    notifier.sendNotification('Hello World!');
    expect(consoleSpy).toHaveBeenCalledWith('Sending notification by email: Hello World!');
    consoleSpy.mockRestore();
  });

  test('should send notification using ShortMessageService', () => {
    const smsService = new ShortMessageService();
    const notifier = new Notifier(smsService);
    const consoleSpy = vi.spyOn(console, 'log');
    notifier.sendNotification('Hello World!');
    expect(consoleSpy).toHaveBeenCalledWith('Sending notification by SMS: Hello World!');
    consoleSpy.mockRestore();
  });
});