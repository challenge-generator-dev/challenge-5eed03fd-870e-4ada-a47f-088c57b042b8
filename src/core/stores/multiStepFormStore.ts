// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { create } from 'zustand';
import type { Step } from '../models/Step';
import type { FormData } from '../models/FormData';

export type MultiStepFormState = {
  currentStep: number;
  steps: Step[];
  formData: FormData;
  isValid: (step: number) => boolean;
  setCurrentStep: (step: number) => void;
  setFormData: (data: Partial<FormData>) => void;
  updateFieldValue: (fieldId: string, value: unknown) => void;
  nextStep: () => void;
  previousStep: () => void;
  reset: () => void;
};

const createInitialFormData = (steps: Step[]): FormData => ({
  formId: crypto.randomUUID(),
  steps,
  currentStepId: steps[0]?.id || '',
  values: {},
  status: 'draft',
  lastUpdated: new Date(),
  metadata: {},
});

export const createMultiStepFormStore = (initialSteps: Step[]) => {
  throw new Error('TODO(reto): createMultiStepFormStore');
};