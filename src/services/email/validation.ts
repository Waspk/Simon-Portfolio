import { EmailConfig } from './types';

export function validateEmailConfig(config: EmailConfig): void {
  if (!config.serviceId) {
    throw new Error('EmailJS service ID is missing');
  }
  if (!config.templateId) {
    throw new Error('EmailJS template ID is missing');
  }
  if (!config.publicKey) {
    throw new Error('EmailJS public key is missing');
  }
}