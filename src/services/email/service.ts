import emailjs from '@emailjs/browser';
import { EmailConfig, EmailParams, EmailError } from './types';
import { validateEmailConfig } from './validation';

export class EmailService {
  private config: EmailConfig;
  private initialized: boolean = false;

  constructor(config: EmailConfig) {
    this.config = config;
    this.initialize();
  }

  private initialize() {
    try {
      validateEmailConfig(this.config);
      emailjs.init(this.config.publicKey);
      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error);
      this.initialized = false;
    }
  }

  async sendEmail(params: EmailParams): Promise<void> {
    if (!this.initialized) {
      throw this.createError('INVALID_CONFIG', 'Email service not properly initialized');
    }

    try {
      const response = await emailjs.send(
        this.config.serviceId,
        this.config.templateId,
        {
          // These fields should match your EmailJS template variables exactly
          user_name: params.from_name,
          user_email: params.from_email,
          message: params.message,
          reply_to: params.from_email
        }
      );

      if (response.status !== 200) {
        throw this.createError('SEND_FAILED', `Failed to send email: ${response.text}`);
      }
    } catch (error: any) {
      console.error('EmailJS send error:', error);
      
      if (error.text?.includes('template ID not found')) {
        throw this.createError(
          'INVALID_TEMPLATE', 
          'Email template not found. Please verify the template ID.'
        );
      }
      
      throw this.createError('SEND_FAILED', error.text || 'Failed to send email');
    }
  }

  private createError(code: EmailError['code'], message: string): EmailError {
    const error = new Error(message) as EmailError;
    error.code = code;
    return error;
  }
}