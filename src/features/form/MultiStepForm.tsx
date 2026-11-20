// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { useState, useCallback } from 'react';
import type { Step } from '../../core/models/Step';
import type { FormData } from '../../core/models/FormData';
import type { ValidationResult } from '../../core/models/ValidationResult';
import { formValidationService } from '../../core/services/FormValidationService';

export interface MultiStepFormProps {
  steps: Step[];
  onSubmit: (data: FormData) => Promise<void>;
  initialData?: Partial<FormData>;
}

interface MultiStepFormState {
  currentStep: number;
  values: Record<string, unknown>;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  isSubmitting: boolean;
  submitError: string | null;
}

export function MultiStepForm({ steps, onSubmit, initialData }: MultiStepFormProps): JSX.Element {
  throw new Error('TODO(reto): anonymous');
}