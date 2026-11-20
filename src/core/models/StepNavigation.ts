export type StepNavigation = {
  canGoNext: boolean;
  canGoPrevious: boolean;
  nextButtonLabel: string;
  previousButtonLabel: string;
  showProgress: boolean;
  nextDisabledReason?: string;
  currentStepIndex: number;
  totalSteps: number;
};