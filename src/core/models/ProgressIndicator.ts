export type ProgressIndicator = {
  currentStep: number;
  totalSteps: number;
  percentage: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  stepLabels: string[];
  isComplete: boolean;
};