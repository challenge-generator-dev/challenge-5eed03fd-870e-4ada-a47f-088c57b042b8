// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { ProgressIndicator } from '../models/ProgressIndicator';
import { Step } from '../models/Step';
import { StepNavigation } from '../models/StepNavigation';

export class FormUXService {
  getProgressIndicator(currentStep: number, totalSteps: number): ProgressIndicator {
    throw new Error('TODO(reto): getProgressIndicator');
  }

  getStepNavigation(step: Step, isValid: boolean): StepNavigation {
    throw new Error('TODO(reto): getStepNavigation');
  }
}