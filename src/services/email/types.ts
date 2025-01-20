export interface EmailConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export interface EmailParams {
  from_name: string;
  from_email: string;
  message: string;
  reply_to: string;
}

export interface EmailError extends Error {
  code: 'INVALID_TEMPLATE' | 'INVALID_CONFIG' | 'SEND_FAILED';
}