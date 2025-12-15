export interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    institution: string;
    message: string;
  }
  
export interface SubmitStatus {
  type: 'success' | 'error' | '';
  message: string;
}

export interface EmailFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}