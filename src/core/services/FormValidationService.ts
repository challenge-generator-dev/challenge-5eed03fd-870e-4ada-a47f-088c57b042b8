// TODO(reto): archivo stubbeado; implementa los cuerpos.
import type { Field } from '../models/Field';
import type { Step } from '../models/Step';
import type { FormData } from '../models/FormData';
import type { ValidationResult } from '../models/ValidationResult';

export class FormValidationService {
  validateField(field: Field, value: unknown): ValidationResult {
    throw new Error('TODO(reto): validateField');
  }

  validateStep(step: Step, formData: FormData): ValidationResult {
    throw new Error('TODO(reto): validateStep');
  }

  validateAllSteps(steps: Step[], formData: FormData): ValidationResult {
    throw new Error('TODO(reto): validateAllSteps');
  }
}

export const formValidationService = new FormValidationService();