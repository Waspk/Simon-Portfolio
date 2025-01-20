import { FormState } from '../components/Contact/types';
import { emailService } from '../config/email';

export async function sendEmail(formData: FormState): Promise<void> {
  await emailService.sendEmail({
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    reply_to: formData.email,
  });
}